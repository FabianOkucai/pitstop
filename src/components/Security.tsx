"use client";

import Image from 'next/image';

export default function Security() {
    return (
        <section className="section" style={{ background: 'var(--foreground)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    <div className="vertical-title" style={{ color: 'var(--accent)' }}>
                        SECURITY & SAFETY
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'grid', gap: '4rem' }}>
                    {/* Security Features with Images */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 className="heading-large" style={{ 
                                marginBottom: '2rem',
                                color: 'var(--accent)'
                            }}>
                                Professional Security Team
                            </h3>
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{
                                    fontFamily: 'Bahiana, sans-serif',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    24/7 Security Personnel
                                </h4>
                                <p className="body-medium" style={{ 
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginBottom: '1.5rem'
                                }}>
                                    Professional security around the clock.
                                </p>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{
                                    fontFamily: 'Bahiana, sans-serif',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    Complete CCTV Coverage
                                </h4>
                                <p className="body-medium" style={{ 
                                    color: 'rgba(255, 255, 255, 0.8)'
                                }}>
                                    Complete surveillance coverage.
                                </p>
                            </div>
                        </div>
                        <div style={{ 
                            position: 'relative', 
                            height: '500px',
                            borderRadius: '25px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/images/hero.png"
                                alt="Security at PITSTOP"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Parking & Emergency */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div style={{ 
                            position: 'relative', 
                            height: '400px',
                            borderRadius: '25px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/images/food.png"
                                alt="Secure Environment"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <h3 className="heading-large" style={{ 
                                marginBottom: '2rem',
                                color: 'var(--accent)'
                            }}>
                                Complete Safety Measures
                            </h3>
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{
                                    fontFamily: 'Bahiana, sans-serif',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    Secure Parking Area
                                </h4>
                                <p className="body-medium" style={{ 
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginBottom: '1.5rem'
                                }}>
                                    Protected parking with guards.
                                </p>
                            </div>
                            <div>
                                <h4 style={{
                                    fontFamily: 'Bahiana, sans-serif',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    Emergency Response Ready
                                </h4>
                                <p className="body-medium" style={{ 
                                    color: 'rgba(255, 255, 255, 0.8)'
                                }}>
                                    Trained staff. Immediate response.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Safety Guarantee */}
                    <div style={{
                        background: 'var(--accent)',
                        color: 'var(--foreground)',
                        padding: '4rem',
                        borderRadius: '30px',
                        textAlign: 'center'
                    }}>
                        <h3 className="heading-large" style={{ marginBottom: '1.5rem' }}>
                            Safe Environment Guarantee
                        </h3>
                        <p className="body-large" style={{
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            Your peace of mind is our priority.
                        </p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
