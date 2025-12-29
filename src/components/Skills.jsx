import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title gradient-text"
            >
                Technical Skills
            </motion.h2>

            <div className="skills-grid-wrapper">
                {skills.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skill-category-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="category-header">
                            <category.icon className="category-icon" size={24} />
                            <h3 className="category-title">{category.category}</h3>
                        </div>

                        <div className="skill-items">
                            {category.items.map((skill, i) => (
                                <div key={i} className="skill-item">
                                    <div className="skill-info">
                                        <span>{skill.name}</span>
                                        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{skill.level}%</span>
                                    </div>
                                    <div className="skill-bg">
                                        <motion.div
                                            className="skill-progress"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
