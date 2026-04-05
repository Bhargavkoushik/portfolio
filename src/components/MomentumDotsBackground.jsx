import { useEffect, useRef } from "react";

const MAX_LINK_DISTANCE = 120;
const MAX_SPEED = 0.55;

const clampSpeed = (vx, vy) => {
  const speed = Math.hypot(vx, vy);

  if (speed === 0) {
    return { vx: 0.08, vy: 0.08 };
  }

  if (speed > MAX_SPEED) {
    const scale = MAX_SPEED / speed;
    return { vx: vx * scale, vy: vy * scale };
  }

  return { vx, vy };
};

const MomentumDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return undefined;
    }

    let animationFrameId;
    let width = 0;
    let height = 0;

    const particles = [];

    const initialize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const count = Math.max(90, Math.floor((width * height) / 14000));

      for (let i = 0; i < count; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.06 + Math.random() * 0.3;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 0.7 + Math.random() * 1.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.vx += (Math.random() - 0.5) * 0.003;
        p.vy += (Math.random() - 0.5) * 0.003;

        const clamped = clampSpeed(p.vx, p.vy);
        p.vx = clamped.vx;
        p.vy = clamped.vy;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -12) p.x = width + 12;
        if (p.x > width + 12) p.x = -12;
        if (p.y < -12) p.y = height + 12;
        if (p.y > height + 12) p.y = -12;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.hypot(dx, dy);

          if (distance < MAX_LINK_DISTANCE) {
            const alpha = Math.pow(1 - distance / MAX_LINK_DISTANCE, 1.8) * 0.25;
            ctx.strokeStyle = `rgba(235, 245, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.fillStyle = "rgba(245, 251, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    initialize();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      initialize();
    });

    resizeObserver.observe(canvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default MomentumDotsBackground;
