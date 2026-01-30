"use client";

export default function StatsSimple() {
    const stats = [
        { number: "5+", label: "Years of Excellence" },
        { number: "10K+", label: "Happy Guests" },
        { number: "50+", label: "Signature Dishes" },
        { number: "8AM-12PM", label: "Operating Hours" }
    ];

    return (
        <section style={{
            padding: '3rem 0',
            background: 'white'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className={`animate-scaleIn animate-delay-${index + 1}`} style={{
                            padding: '1rem',
                            minWidth: '150px'
                        }}>
                            <div style={{
                                fontFamily: 'Changa One, sans-serif',
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '400',
                                lineHeight: '1',
                                marginBottom: '0.5rem',
                                color: 'var(--accent)'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                color: 'var(--text-muted)',
                                fontSize: '1rem',
                                fontFamily: 'Changa One, sans-serif'
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
