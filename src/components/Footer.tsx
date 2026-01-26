"use client";

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--foreground)',
            color: 'white',
            padding: '2rem 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{
                        fontFamily: 'Bahiana, sans-serif',
                        fontSize: '1.125rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                    }}>
                        © 2026 PITSTOP. All rights reserved.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center'
                    }}>
                        <a href="https://www.facebook.com/profile.php?id=61569334481875" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--accent)',
                            fontSize: '1.25rem',
                            fontFamily: 'Bahiana, sans-serif',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                            textTransform: 'uppercase'
                        }}>
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/pitstopgrills/" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--accent)',
                            fontSize: '1.25rem',
                            fontFamily: 'Bahiana, sans-serif',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                            textTransform: 'uppercase'
                        }}>
                            Instagram
                        </a>
                        <a href="https://www.tiktok.com/search?q=pitstop&t=1769361582553" target="_blank" rel="noopener noreferrer" style={{
                            color: 'var(--accent)',
                            fontSize: '1.25rem',
                            fontFamily: 'Bahiana, sans-serif',
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
