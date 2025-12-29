import React from 'react';
import { profile } from '../data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer style={{
            padding: '4rem 2rem 2rem',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 1), transparent)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '4rem',
            textAlign: 'center'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={24} />
                    </a>
                    <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${profile.email}`} className="social-icon">
                        <Mail size={24} />
                    </a>
                </div>

                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Built with React, Vite & Framer Motion</p>
                </div>

                <motion.button
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="btn-outline flex-center"
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        padding: 0,
                        marginTop: '1rem',
                        borderColor: 'rgba(255,255,255,0.2)'
                    }}
                >
                    <ArrowUp size={24} />
                </motion.button>

            </div>
        </footer>
    );
};

export default Footer;
