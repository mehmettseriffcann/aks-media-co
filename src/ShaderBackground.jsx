import React, { useEffect, useRef } from 'react';
import { effect, frame, init, surface } from 'vgpu';

const shaderSource = `
struct Uniforms {
  resolution: vec2f,
  time: f32,
};
@group(0) @binding(0) var<uniform> u: Uniforms;

// Hash function for random numbers
fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(12.9898, 78.233))) * 43758.5453);
}

// 2D Noise based on Morgan McGuire's
fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  
  let a = hash21(i);
  let b = hash21(i + vec2f(1.0, 0.0));
  let c = hash21(i + vec2f(0.0, 1.0));
  let d = hash21(i + vec2f(1.0, 1.0));
  
  let u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

@fragment fn main(@location(0) uv: vec2f) -> @location(0) vec4f {
  // Normalize and scale coordinates
  let aspect = u.resolution.x / u.resolution.y;
  let st = (uv - 0.5) * vec2f(aspect, 1.0);
  
  let t = u.time * 0.5;
  
  // Create a grid for our constellation particles
  let scale = 40.0;
  let gridSt = st * scale;
  let i_st = floor(gridSt);
  let f_st = fract(gridSt);
  
  var finalColor = vec3f(0.0, 0.0, 0.0);
  
  // Ambient particle scattering
  let cellHash = hash21(i_st);
  
  if (cellHash > 0.92) {
    // Offset particle position inside cell with time
    let ox = sin(t * 0.5 + cellHash * 100.0) * 0.3;
    let oy = cos(t * 0.5 + cellHash * 50.0) * 0.3;
    
    let center = vec2f(0.5 + ox, 0.5 + oy);
    let dist = length(f_st - center);
    
    // Draw a sharp tiny point (representing a triangle/star)
    let shape = 1.0 - smoothstep(0.02, 0.08, dist);
    
    // Color palette based on Dala tokens
    // Electric Iris: #8052ff -> (0.5, 0.32, 1.0)
    // Saffron Spark: #ffb829 -> (1.0, 0.72, 0.16)
    // Deep Verdant: #15846e -> (0.08, 0.52, 0.43)
    
    var col = vec3f(0.5, 0.32, 1.0); // Default Electric Iris
    
    let colorHash = hash21(i_st + vec2f(1.0, 1.0));
    if (colorHash > 0.8) {
       col = vec3f(1.0, 0.72, 0.16); // Saffron
    } else if (colorHash > 0.6) {
       col = vec3f(0.08, 0.52, 0.43); // Verdant
    } else if (colorHash > 0.4) {
       col = vec3f(0.8, 0.2, 0.5); // Magenta accent
    }
    
    // Form a "brain/cloud" shape mostly on the right side of the screen
    let cloudDist = length(st - vec2f(0.3, 0.0));
    let cloudDensity = smoothstep(0.6, 0.2, cloudDist + noise(st * 3.0 + t * 0.2) * 0.3);
    
    // The particle brightness depends on if it's inside the brain shape or scattered ambient
    let brightness = max(0.1, cloudDensity * 2.0);
    
    finalColor = col * shape * brightness;
  }
  
  // Background void is pure black #000000
  return vec4f(finalColor, 1.0);
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
          shader.set({ uniforms: { resolution: output.size, time: t } });
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
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <canvas 
        ref={canvasRef} 
        style={{
          width: '100%',
          height: '100%',
          background: 'var(--color-void)'
        }} 
      />
    </div>
  );
}
