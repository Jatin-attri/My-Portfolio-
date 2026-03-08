import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      if (isReducedMotion) return;
      const particleCount = window.innerWidth < 768 ? 40 : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1500})`;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep gradient base
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      gradient.addColorStop(0, "#040711");
      gradient.addColorStop(0.5, "#070f22");
      gradient.addColorStop(1, "#041326");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ambient radial lights for a richer theme
      const glowA = ctx.createRadialGradient(
        canvas.width * 0.18,
        canvas.height * 0.22,
        20,
        canvas.width * 0.18,
        canvas.height * 0.22,
        canvas.width * 0.45,
      );
      glowA.addColorStop(0, "rgba(34, 211, 238, 0.16)");
      glowA.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = glowA;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glowB = ctx.createRadialGradient(
        canvas.width * 0.82,
        canvas.height * 0.18,
        20,
        canvas.width * 0.82,
        canvas.height * 0.18,
        canvas.width * 0.4,
      );
      glowB.addColorStop(0, "rgba(56, 189, 248, 0.14)");
      glowB.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = glowB;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glowC = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.92,
        30,
        canvas.width * 0.5,
        canvas.height * 0.92,
        canvas.width * 0.5,
      );
      glowC.addColorStop(0, "rgba(16, 185, 129, 0.12)");
      glowC.addColorStop(1, "rgba(16, 185, 129, 0)");
      ctx.fillStyle = glowC;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!isReducedMotion) {
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        drawLines();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ background: "#050816" }}
    />
  );
}
