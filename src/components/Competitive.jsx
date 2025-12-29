import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, TrendingUp, Code2, Zap, Target, Award } from 'lucide-react';
import { competitiveProfiles } from '../data';
import '../styles/Competitive.css';

const TiltCard = ({ children, color, href }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
        setGlowPos({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            ref={cardRef}
            className="cp-tilt-card"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
                transform: isHovered
                    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            }}
        >
            <div
                className="cp-glow"
                style={{
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${color}40, transparent 70%)`,
                    opacity: isHovered ? 1 : 0
                }}
            />
            <div className="cp-content">
                {children}
            </div>
        </motion.a>
    );
};

const Competitive = () => {
    const [profiles, setProfiles] = useState(competitiveProfiles);

    useEffect(() => {
        const fetchStats = async () => {
            const updatedProfiles = [...competitiveProfiles];

            // LeetCode: Solved + Max Rating (Live Fetch)
            const lcIndex = updatedProfiles.findIndex(p => p.apiType === 'leetcode');
            if (lcIndex !== -1) {
                try {
                    // Solved Count
                    const solvedRes = await fetch('https://leetcode-stats-api.herokuapp.com/mnaHgm4Sk4');
                    let solvedData = {};
                    if (solvedRes.ok) {
                        try {
                            solvedData = await solvedRes.json();
                        } catch (e) {
                            console.error("Failed to parse LeetCode solved JSON", e);
                        }
                    }

                    // Contest Rating - Calculate Max
                    const ratingRes = await fetch('https://alfa-leetcode-api.onrender.com/userContestRankingInfo/mnaHgm4Sk4');
                    let maxRating = null;

                    if (ratingRes.ok) {
                        try {
                            const ratingData = await ratingRes.json();
                            // If API valid, ratingData is array or contains data
                            if (Array.isArray(ratingData)) {
                                const history = ratingData.filter(c => c.attended);
                                if (history.length > 0) {
                                    maxRating = Math.max(...history.map(c => c.rating));
                                }
                            } else if (ratingData?.data?.userContestRankingHistory) {
                                // Handle potential different structure if API changes
                                const history = ratingData.data.userContestRankingHistory.filter(c => c.attended);
                                if (history.length > 0) {
                                    maxRating = Math.max(...history.map(c => c.rating));
                                }
                            }
                        } catch (e) {
                            console.error("Failed to parse LeetCode rating JSON", e);
                        }
                    }

                    // Update state if we have valid data, otherwise keep existing/fallback
                    const newStats = { ...(updatedProfiles[lcIndex].stats || {}) };

                    if (solvedData.status === 'success' || solvedData.totalSolved) {
                        newStats.solved = solvedData.totalSolved || solvedData.count;
                    }

                    if (maxRating) {
                        newStats.rating = Math.round(maxRating);
                        newStats.isMax = true;
                    }

                    updatedProfiles[lcIndex].stats = newStats;

                } catch (err) {
                    console.error("Failed to fetch LeetCode stats", err);
                }
            }

            // Codeforces: Max Rating (Live Fetch)
            const cfIndex = updatedProfiles.findIndex(p => p.apiType === 'codeforces');
            if (cfIndex !== -1) {
                try {
                    const cfRes = await fetch('https://codeforces.com/api/user.info?handles=deepak.phulo');
                    const cfData = await cfRes.json();
                    if (cfData.status === 'OK' && cfData.result.length > 0) {
                        updatedProfiles[cfIndex].stats = {
                            ...(updatedProfiles[cfIndex].stats || {}),
                            rating: cfData.result[0].maxRating, // Always use maxRating from API
                            rank: cfData.result[0].maxRank,
                            isMax: true
                        };
                    }
                } catch (err) {
                    console.error("Failed to fetch Codeforces stats", err);
                }
            }

            setProfiles([...updatedProfiles]);
        };

        fetchStats();
    }, []);

    return (
        <section id="competitive" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="cp-header">
                    <h2 className="section-title gradient-text" style={{ marginBottom: 0 }}>Competitive Programming</h2>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Code2 size={32} color="var(--accent-primary)" />
                    </motion.div>
                </div>

                <p className="cp-description">
                    Pushing limits with algorithms. Regularly competing to sharp problem-solving intuition.
                </p>

                <div className="cp-grid">
                    {profiles.map((profile, index) => (
                        <TiltCard key={index} color={profile.color} href={profile.url}>
                            <div
                                className="platform-icon-box"
                                style={{
                                    boxShadow: `0 0 20px ${profile.color}30`,
                                    border: `1px solid ${profile.color}50`
                                }}
                            >
                                <Trophy size={24} color={profile.color} />
                            </div>

                            <h3 className="cp-platform" style={{ color: 'white' }}>{profile.platform}</h3>

                            <div className="cp-live-stats" style={{ color: profile.color }}>
                                {profile.stats ? (
                                    <>
                                        {/* Solved Count */}
                                        {profile.stats.solved && (
                                            <div className="stat-item" title="Problems Solved">
                                                <Zap size={14} />
                                                <span>{profile.stats.solved}</span>
                                            </div>
                                        )}

                                        {/* Max Rating or Score */}
                                        {(profile.stats.rating || profile.stats.score) && (
                                            <div className="stat-item" title={profile.stats.isMax ? "Max Rating" : "Rating"}>
                                                <Target size={14} />
                                                <span>
                                                    {profile.stats.rating || profile.stats.score}
                                                    {profile.stats.isMax && <span style={{ fontSize: '0.7em', marginLeft: '2px', opacity: 0.8 }}>(Max)</span>}
                                                </span>
                                            </div>
                                        )}

                                        {/* Rank (Codeforces) */}
                                        {profile.stats.rank && (
                                            <div className="stat-item" title="Max Rank">
                                                <Award size={14} />
                                                <span style={{ textTransform: 'capitalize' }}>{profile.stats.rank}</span>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>View Profile</span>
                                )}
                            </div>

                            <div className="cp-link-text" style={{ color: profile.color }}>
                                View Profile <ExternalLink size={16} />
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Competitive;
