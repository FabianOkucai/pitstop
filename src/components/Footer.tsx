"use client";

export default function Footer() {
    return (
        <footer style={{
            background: 'transparent',
            color: 'var(--foreground)',
            padding: '3rem 0 2rem 0',
            position: 'relative'
        }}>
            {/* Luxurious separator line */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, var(--accent) 20%, var(--accent) 80%, transparent 100%)',
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
            }}></div>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    flexDirection: 'column'
                }}>
                    <p style={{
                        fontFamily: 'Changa One, sans-serif',
                        fontSize: '1.125rem',
                        color: 'var(--text-muted)',
                        textAlign: 'center',
                        marginBottom: '1rem'
                    }}>
                        © 2026 PITSTOP. All rights reserved.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <a href="https://www.facebook.com/profile.php?id=61569334481875" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--accent)',
                            fontSize: '1rem',
                            fontFamily: 'Changa One, sans-serif',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                            textTransform: 'uppercase'
                        }}>
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/pitstopgrills/" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--accent)',
                            fontSize: '1rem',
                            fontFamily: 'Changa One, sans-serif',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                            textTransform: 'uppercase'
                        }}>
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/search?q=pitstop&t=1769361582553" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--accent)',
                            fontSize: '1rem',
                            fontFamily: 'Changa One, sans-serif',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                            textTransform: 'uppercase'
                        }}>
                            TikTok
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
