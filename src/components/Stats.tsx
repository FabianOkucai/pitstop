"use client";

import Image from 'next/image';

export default function Stats() {
    const stats = [
        { number: "5+", label: "Years of Excellence" },
        { number: "10K+", label: "Happy Guests" },
        { number: "50+", label: "Signature Dishes" },
        { number: "24/7", label: "Premium Service" }
    ];

    return (
        <section className="section" style={{
            background: 'var(--foreground)',
            color: 'white',
        }}>
            {/* Extended background image from hero */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1
            }}>
                <Image
                    src="/images/hero.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.2 }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)'
                }}></div>
            </div>

            {/* Animated line */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
                animation: 'slideIn 3s ease-in-out infinite',
                zIndex: 2
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease',
                            animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                        }}>
                            <div style={{
                                fontFamily: 'Bahiana, sans-serif',
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: '400',
                                lineHeight: '1',
                                marginBottom: '1rem',
                                color: 'var(--accent)',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                {stat.number}
                            </div>
                            <div className="label" style={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '1.25rem'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
