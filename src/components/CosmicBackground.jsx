import React, { useEffect, useRef } from 'react';

const CosmicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let nebulaClouds = [];

        const resizeCanvas = () => {
            // Use viewport size only - fixed positioning
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
            initNebula();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 800);

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.05,
                    layer: Math.floor(Math.random() * 3) + 1 // 1=back, 2=mid, 3=front
                });
            }
        };

        const initNebula = () => {
            nebulaClouds = [];
            for (let i = 0; i < 5; i++) {
                nebulaClouds.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 300 + 200,
                    color: i % 2 === 0 ? 'rgba(76, 29, 149, 0.1)' : 'rgba(14, 165, 233, 0.05)', // Violet & Cyan drift
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2
                })
            }
        }

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
            mouseX = (e.clientX - canvas.width / 2) * 0.05;
            mouseY = (e.clientY - canvas.height / 2) * 0.05;
        };

        const draw = () => {
            ctx.fillStyle = '#030014'; // Deep space black/purple
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Nebula
            nebulaClouds.forEach(cloud => {
                cloud.x += cloud.vx;
                cloud.y += cloud.vy;

                // Bounce off edges
                if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius;
                if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;
                if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius;
                if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius;

                const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.radius);
                gradient.addColorStop(0, cloud.color);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw Stars
            stars.forEach(star => {
                // Twinkle effect
                star.alpha += (Math.random() - 0.5) * 0.02;
                if (star.alpha < 0.1) star.alpha = 0.1;
                if (star.alpha > 1) star.alpha = 1;

                // Parallax movement based on mouse + constant drift
                const moveX = mouseX * star.layer * 0.5;
                const moveY = mouseY * star.layer * 0.5;

                ctx.beginPath();
                ctx.arc(star.x + moveX, star.y + moveY, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default CosmicBackground;
