"use client";
import { useEffect } from "react";

export default function ParticlesClassic() {
  useEffect(() => {
    const loadParticles = async () => {
      if (!window || !document) return;
      
      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.async = true;
      
      script.onload = () => {
        // @ts-ignore
        if (window.particlesJS) {
          // @ts-ignore
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#6c8cff" },
              shape: { type: "circle" },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false },
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#6c8cff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
              },
            },
            /// Useless bc of zindex is -1 but whatever, lets keep it for now
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
                repulse: { distance: 100 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          });
        }
      };
      
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    };
    
    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}