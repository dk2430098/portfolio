import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { certifications } from '../data';

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleCerts = showAll ? certifications : certifications.slice(0, 3);

    return (
        <section id="certifications" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title gradient-text"
            >
                Certifications & Achievements
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                <AnimatePresence>
                    {visibleCerts.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                <div className="flex-center" style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    color: 'var(--accent-primary)'
                                }}>
                                    <cert.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.4' }}>{cert.title}</h3>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '1rem' }}>
                                {cert.description}
                            </p>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline flex-center"
                                style={{
                                    alignSelf: 'flex-start',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    padding: '0.5rem 1rem'
                                }}
                            >
                                View Certificate <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {certifications.length > 3 && (
                <div className="flex-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn-outline flex-center"
                        style={{ gap: '0.5rem', cursor: 'pointer' }}
                    >
                        {showAll ? (
                            <>Show Less <ChevronUp size={20} /></>
                        ) : (
                            <>Show More <ChevronDown size={20} /></>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Certifications;
