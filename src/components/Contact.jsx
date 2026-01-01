import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../data';

const Contact = () => {
    const [state, setState] = React.useState({
        submitting: false,
        succeeded: false,
        errors: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState(prev => ({ ...prev, submitting: true }));

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xpqzopbz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true, errors: [] });
            } else {
                const data = await response.json();
                setState({ submitting: false, succeeded: false, errors: data.errors || [] });
            }
        } catch (error) {
            setState({ submitting: false, succeeded: false, errors: [{ message: "Something went wrong. Please try again." }] });
        }
    };

    if (state.succeeded) {
        return (
            <section id="contact" className="section container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-title gradient-text"
                >
                    Get In Touch
                </motion.h2>
                <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Message Sent Successfully!</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Thank you for giving information, I will come back soon.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

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
                    onSubmit={handleSubmit}
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
                    {state.errors && state.errors.length > 0 && (
                        <div style={{ color: 'red', textAlign: 'center' }}>
                            {state.errors.map((error, index) => (
                                <p key={index}>{error.message || "Failed to send message"}</p>
                            ))}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn-primary"
                        style={{ width: '100%', marginTop: '1rem', opacity: state.submitting ? 0.7 : 1 }}
                    >
                        {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
