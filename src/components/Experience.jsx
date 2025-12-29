import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title gradient-text"
            >
                Experience
            </motion.h2>

            <div className="timeline">
                {experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="glass-card timeline-card">
                            <span className="timeline-date">{exp.duration}</span>
                            <h3 className="timeline-title">{exp.role}</h3>
                            <p className="timeline-company">
                                {exp.company}
                                {exp.location && <span style={{ fontSize: '0.9em', opacity: 0.8, marginLeft: '0.5rem' }}>| {exp.location}</span>}
                            </p>
                            <ul className="timeline-list">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
