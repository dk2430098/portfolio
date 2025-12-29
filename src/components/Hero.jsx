import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { profile } from '../data';
import '../styles/Hero.css';

const HeroImage3D = () => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (inverted for natural feel)
        const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg tilt
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotation({ x: rotateX, y: rotateY });
        setGlarePosition({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 }); // Reset on leave
    };

    return (
        <motion.div
            className="hero-3d-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
        >
            <div className="hero-glow-underlay"></div>

            <motion.div
                ref={cardRef}
                className="hero-3d-wrapper"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: isHovered
                        ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
                }}
            >
                <div className="hero-img-box">
                    <img src={profileImg} alt="Profile" className="hero-img-3d" />

                    {/* Dynamic Glare Effect */}
                    <div
                        className="hero-glare"
                        style={{
                            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                            opacity: isHovered ? 1 : 0
                        }}
                    />

                    {/* Border Ring */}
                    <div className="hero-border-ring"></div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    return (
        <section className="hero container">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <HeroImage3D />

            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-greeting"
                >
                    Hi, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hero-name gradient-text"
                >
                    {profile.name}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-role"
                >
                    {profile.role}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hero-description"
                >
                    Building scalable, real-world applications with clean code and modern technologies.
                    Focused on Data Structures, Algorithms, and Full-Stack Development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hero-buttons"
                >
                    <a href="#projects" className="btn-primary flex-center" style={{ gap: '0.5rem' }}>
                        View Work <ArrowRight size={18} />
                    </a>
                    <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex-center"
                        style={{ gap: '0.5rem' }}
                    >
                        Resume <Download size={18} />
                    </a>
                    <a href="#contact" className="btn-outline flex-center" style={{ gap: '0.5rem' }}>
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
