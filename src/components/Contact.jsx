import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title gradient-text"
            >
                Get In Touch
            </motion.h2>

            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer" className="flex-center" style={{ color: 'var(--text-primary)', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none' }}>
                        <div className="glass flex-center" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                            <Mail />
                        </div>
                        <span>Email</span>
                    </a>
                    <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex-center" style={{ color: 'var(--text-primary)', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none' }}>
                        <div className="glass flex-center" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                            <Linkedin />
                        </div>
                        <span>LinkedIn</span>
                    </a>
                    <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="flex-center" style={{ color: 'var(--text-primary)', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none' }}>
                        <div className="glass flex-center" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                            <Github />
                        </div>
                        <span>GitHub</span>
                    </a>
                </div>

                <form
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    action="https://formspree.io/f/xpqzopbz"
                    method="POST"
                >
                    <input
                        name="name"
                        required
                        type="text"
                        placeholder="Your Name"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            color: 'white',
                            outline: 'none'
                        }}
                    />
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="Your Email"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            color: 'white',
                            outline: 'none'
                        }}
                    />
                    <textarea
                        name="message"
                        required
                        placeholder="Message"
                        rows="5"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            color: 'white',
                            outline: 'none',
                            resize: 'none'
                        }}
                    ></textarea>
                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        Send Message
                    </button>
                </form>
            </div>

            <footer style={{ textAlign: 'center', marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} Deepak Kumar. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
