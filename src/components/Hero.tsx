"use client";

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero">
            <a href="/book" className="btn-primary book-btn animate-fadeInUp animate-delay-2 hover-glow">
                Book Table
            </a>

            {/* Logo */}
            <div className="hero-logo">
                <Image
                    src="/images/logo-main.jpg"
                    alt="PITSTOP Logo"
                    width={80}
                    height={80}
                    className="hero-logo-img"
                />
            </div>

            {/* Background Image */}
            <div className="hero-bg">
                <Image
                    src="/images/hero.png"
                    alt="PITSTOP Background"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.3 }}
                    priority
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                {/* Left Side - Text */}
                <div className="hero-text animate-slideInLeft">
                    <div className="hero-title">
                        BENEDICTION OF THE GUEST
                    </div>
                </div>

                {/* Right Side - Bigger Styled Image */}
                <div className="hero-image-container animate-slideInRight animate-delay-1">
                    <div className="hero-image-wrapper hover-scale">
                        <Image
                            src="/images/food.png"
                            alt="Finest Experience"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
