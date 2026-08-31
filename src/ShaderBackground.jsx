import React, { useEffect, useRef } from 'react';
import { effect, frame, init, surface } from 'vgpu';

const shaderSource = `
struct Uniforms {
  resolution: vec2f,
  time: f32,
  scroll_y: f32,
};
@group(0) @binding(0) var<uniform> uniforms: Uniforms;

// Hash for noise
fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(12.9898, 78.233))) * 43758.5453);
}

// 2D Noise
fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  
  let a = hash(i);
  let b = hash(i + vec2f(1.0, 0.0));
  let c = hash(i + vec2f(0.0, 1.0));
  let d = hash(i + vec2f(1.0, 1.0));
  
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Fractional Brownian Motion (fbm)
fn fbm(p: vec2f) -> f32 {
  var v = 0.0;
  var a = 0.5;
  var shift = vec2f(100.0, 100.0);
  // Rotate to reduce axial bias
  let rot = mat2x2f(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  var pp = p;
  
  for (var i = 0; i < 5; i = i + 1) {
    v += a * noise(pp);
    pp = rot * pp * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

@fragment fn main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = uniforms.resolution.x / uniforms.resolution.y;
  
  // Scroll parallax & zoom effect
  let scroll = uniforms.scroll_y;
  let zoom = 1.0 - (scroll * 0.2); // zooms in slightly as you scroll
  let st = (uv - 0.5) * vec2f(aspect, 1.0) * zoom;
  
  let t = (uniforms.time * 0.15) + (scroll * 0.5); // time accelerates based on scroll
  
  // Domain warping for liquid silk effect
  var q = vec2f(0.0);
  q.x = fbm(st + 0.00 * t);
  q.y = fbm(st + vec2f(1.0));
  
  var r = vec2f(0.0);
  r.x = fbm(st + 1.0 * q + vec2f(1.7, 9.2) + 0.15 * t);
  r.y = fbm(st + 1.0 * q + vec2f(8.3, 2.8) + 0.126 * t);
  
  let f = fbm(st + r);
  
  let c_obsidian = vec3f(0.04, 0.04, 0.04);
  let c_ink = vec3f(0.15, 0.12, 0.10);
  let c_terracotta = vec3f(0.79, 0.38, 0.31);
  
  // Mix colors based on fbm values
  var col = mix(c_obsidian, c_ink, clamp((f*f)*4.0, 0.0, 1.0));
  
  // Add terracotta glow to the fluid edges, intensity increases slightly with scroll
  let edge = smoothstep(0.3, 0.7, r.x) * smoothstep(0.7, 0.3, r.y);
  let intensity = 0.4 + (scroll * 0.3);
  col = mix(col, c_terracotta, edge * intensity);
  
  return vec4f(col, 1.0);
}
`;

export default function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    let isCancelled = false;
    
    async function start() {
      try {
        const gpu = await init();
        if (!gpu || isCancelled) return;
        
        const output = surface(gpu, canvasRef.current, { dpr: window.devicePixelRatio || 1 });
        const shader = effect(gpu, shaderSource);

        let t = 0;
        frame(gpu, (f) => {
          t += 0.01;
          const scrollY = window.scrollY / window.innerHeight; // Normalized 0..N
          shader.set({ uniforms: { resolution: output.size, time: t, scroll_y: scrollY } });
          f.pass(output, shader);
        });
        
        cleanup = () => gpu.dispose();
      } catch (err) {
        console.warn("WebGPU initialization failed:", err);
      }
    }
    
    start();
    return () => {
      isCancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <canvas 
        ref={canvasRef} 
        style={{
          width: '100%',
          height: '100%',
          background: 'var(--color-obsidian)'
        }} 
      />
    </div>
  );
}
