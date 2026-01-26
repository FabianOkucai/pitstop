"use client";

export default function Staff() {
    const poeticTexts = [
        "Masters of their craft",
        "Excellence in every gesture",
        "Passion served daily",
        "Artisans of hospitality",
        "Where skill meets soul",
        "Professional hearts beating",
        "Dedication beyond measure",
        "Service elevated to art"
    ];

    return (
        <section className="section" style={{ background: 'var(--surface)', position: 'relative' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="vertical-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--foreground)' }}>OUR EXPERT</span>{' '}
                    <span style={{ color: 'var(--accent)' }}>STAFF</span>
                </div>
                <div className="staff-content" style={{ position: 'relative', width: '100%', minHeight: '600px' }}>
                    {/* Randomly positioned poetic texts - EXPANDED */}
                    <div style={{
                        position: 'absolute',
                        top: '5%',
                        left: '10%',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--accent)',
                        transform: 'rotate(-5deg)',
                        maxWidth: '45%'
                    }}>
                        Masters of their craft
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '15%',
                        right: '10%',
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--foreground)',
                        transform: 'rotate(3deg)',
                        maxWidth: '50%'
                    }}>
                        Excellence in every gesture
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '35%',
                        left: '15%',
                        fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--accent)',
                        transform: 'rotate(2deg)',
                        maxWidth: '40%'
                    }}>
                        Passion served daily
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '25%',
                        right: '15%',
                        fontSize: 'clamp(1.1rem, 2.3vw, 1.8rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--foreground)',
                        transform: 'rotate(-3deg)',
                        maxWidth: '35%'
                    }}>
                        Artisans of hospitality
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '55%',
                        right: '10%',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--accent)',
                        transform: 'rotate(4deg)',
                        maxWidth: '45%'
                    }}>
                        Where skill meets soul
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '65%',
                        left: '20%',
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--foreground)',
                        transform: 'rotate(-2deg)',
                        maxWidth: '50%'
                    }}>
                        Professional hearts beating
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--accent)',
                        transform: 'rotate(6deg)',
                        maxWidth: '40%'
                    }}>
                        Dedication beyond measure
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '80%',
                        right: '5%',
                        fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
                        fontFamily: 'Bahiana, sans-serif',
                        color: 'var(--foreground)',
                        transform: 'rotate(-4deg)',
                        maxWidth: '45%'
                    }}>
                        Service elevated to art
                    </div>
                </div>
            </div>
        </section>
    );
}
