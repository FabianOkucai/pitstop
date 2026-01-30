"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function BookPage() {
    const handleCall = () => {
        window.location.href = 'tel:+254712688699';
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/254712688699?text=Hello, I would like to book a table at PITSTOP', '_blank');
    };

    const handleSMS = () => {
        window.location.href = 'sms:+254712688699?body=Hello, I would like to book a table at PITSTOP';
    };

    return (
        <main style={{ 
            minHeight: '100vh', 
            background: 'var(--foreground)', 
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Logo */}
            <Link href="/" style={{
                position: 'absolute',
                top: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10
            }}>
                <Image
                    src="/images/logo-main.jpg"
                    alt="PITSTOP Logo"
                    width={60}
                    height={60}
                    style={{ borderRadius: '50%', cursor: 'pointer' }}
                />
            </Link>

            {/* Background Image */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1
            }}>
                <Image
                    src="/images/hero.png"
                    alt="PITSTOP Background"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.3 }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)'
                }}></div>
            </div>

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 2rem 2rem 2rem'
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '600px'
                }}>
                    <h1 style={{
                        fontFamily: 'Changa One, sans-serif',
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        marginBottom: '2rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}>
                        <span style={{ color: 'white' }}>BOOK YOUR</span>{' '}
                        <span style={{ color: 'var(--accent)' }}>TABLE</span>
                    </h1>

                    <p style={{
                        fontFamily: 'Changa One, sans-serif',
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                        Call, message or WhatsApp us at
                    </p>

                    <div style={{
                        fontFamily: 'Changa One, sans-serif',
                        fontSize: '3rem',
                        color: 'var(--accent)',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}>
                        +254 712 688 699
                    </div>
                </div>
            </div>
        </main>
    );
}
