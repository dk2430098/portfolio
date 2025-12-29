import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title gradient-text">About Me</h2>
                <div className="glass-card p-8" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        {profile.about}
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Location</h3>
                            <p>{profile.location}</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Email</h3>
                            <p><a href={`mailto:${profile.email}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{profile.email}</a></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
