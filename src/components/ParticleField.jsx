import React, { useEffect, useRef } from 'react';
import './ParticleField.css';

const COLORS = ['rgba(214, 6, 6, 0.75)', 'rgba(255, 80, 80, 0.55)', 'rgba(180, 0, 0, 0.65)'];
const CONNECT_COLOR = 'rgba(214, 6, 6,';

const ParticleField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let raf;
        let particles = [];

        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize, { passive: true });

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x       = Math.random() * canvas.width;
                this.y       = Math.random() * canvas.height;
                this.size    = Math.random() * 1.8 + 0.4;
                this.speedX  = (Math.random() - 0.5) * 0.4;
                this.speedY  = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.45 + 0.15;
                this.color   = COLORS[Math.floor(Math.random() * COLORS.length)];
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width)  this.x = 0;
                if (this.x < 0)             this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0)             this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle    = this.color;
                ctx.globalAlpha  = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const connect = () => {
            const maxDist = 130;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d  = Math.sqrt(dx * dx + dy * dy);
                    if (d < maxDist) {
                        ctx.strokeStyle = CONNECT_COLOR + ((1 - d / maxDist) * 0.15) + ')';
                        ctx.globalAlpha = 1;
                        ctx.lineWidth   = 0.4;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const init = () => {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 18000);
            for (let i = 0; i < count; i++) particles.push(new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            connect();
            raf = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(raf);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-field" />;
};

export default ParticleField;
