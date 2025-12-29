import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import '../styles/About.css';

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
                <div className="glass-card about-card">
                    <p className="about-text">
                        {profile.about}
                    </p>
                    <div className="about-details">
                        <div className="detail-item">
                            <h3>Location</h3>
                            <p>{profile.location}</p>
                        </div>
                        <div className="detail-item">
                            <h3>Email</h3>
                            <p><a href={`mailto:${profile.email}`} className="detail-link">{profile.email}</a></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
