import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data';
import '../styles/Projects.css';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title gradient-text"
            >
                Projects
            </motion.h2>

            <div className="projects-grid">
                <AnimatePresence>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card project-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                {project.github && (
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        GitHub <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {projects.length > 3 && (
                <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn-outline flex-center"
                        style={{ margin: '0 auto', gap: '0.5rem', cursor: 'pointer' }}
                    >
                        {showAll ? (
                            <>Show Less <ChevronUp size={20} /></>
                        ) : (
                            <>Show More ({projects.length - 3}) <ChevronDown size={20} /></>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
