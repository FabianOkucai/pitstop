"use client";

import Image from 'next/image';

export default function Experience() {
    return (
        <section className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    <div className="vertical-title">
                        THE PITSTOP EXPERIENCE
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'grid', gap: '4rem' }}>
                            {/* Culinary Excellence - Text Only */}
                            <div>
                                <h3 className="heading-large" style={{ marginBottom: '1rem' }}>
                                    Culinary Excellence
                                </h3>
                                <p className="body-large" style={{ marginBottom: '2rem' }}>
                                    Authentic flavors. International techniques.
                                </p>
                            </div>

                            {/* Rhumba Sessions - With Image */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '3rem',
                                alignItems: 'center'
                            }}>
                                <div style={{ 
                                    position: 'relative', 
                                    height: '400px',
                                    borderRadius: '20px',
                                    overflow: 'hidden'
                                }}>
                                    <Image
                                        src="/images/rhumba.png"
                                        alt="Live Rhumba"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h3 className="heading-large" style={{ marginBottom: '1rem' }}>
                                        Live Rhumba Sessions
                                    </h3>
                                    <p className="body-large">
                                        Soulful melodies. Premium cuisine.
                                    </p>
                                </div>
                            </div>

                            {/* Premium Lounge - Text Only */}
                            <div style={{ 
                                background: 'var(--foreground)', 
                                color: 'white', 
                                padding: '4rem',
                                borderRadius: '30px'
                            }}>
                                <h3 className="heading-large" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                                    Premium Lounge Experience
                                </h3>
                                <p style={{ 
                                    fontSize: '2rem',
                                    lineHeight: '1.7',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontFamily: 'Changa One', sans-serif
                                }}>
                                    Elite service. Memorable moments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
