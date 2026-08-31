import React, { useEffect, useRef } from 'react';
import { effect, frame, init, surface } from 'vgpu';

const shaderSource = `
struct Uniforms {
  resolution: vec2f,
  time: f32,
};
@group(0) @binding(0) var<uniform> u: Uniforms;

@fragment fn main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let st = (uv - 0.5) * (u.resolution / max(u.resolution.x, u.resolution.y));
  let d = length(st);
  let time = u.time * 2.0;
  
  // Premium dark grey/black background
  let color1 = vec3f(0.04, 0.04, 0.04); 
  
  // Coral red accent matching logo
  let color2 = vec3f(0.84, 0.33, 0.29); 
  
  // Subtle animated aura
  let mixVal = smoothstep(0.8, 0.0, d + sin(time + st.x * 5.0 + st.y * 3.0) * 0.1);
  let finalColor = mix(color1, color2, mixVal * 0.15); // keep it subtle
  
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
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#0a0a0a',
        pointerEvents: 'none'
      }} 
    />
  );
}
