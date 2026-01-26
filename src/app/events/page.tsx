import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function EventsPage() {
    const events = [
        { day: "Friday", title: "Rhumba Night", artist: "Live Band", time: "8 PM - Late" },
        { day: "Saturday", title: "Elite Saturdays", artist: "Guest DJ", time: "9 PM - Late" },
        { day: "Sunday", title: "Sunday Grill & Soul", artist: "Acoustic Sets", time: "2 PM - 10 PM" }
    ];

    return (
        <main>
            <Navbar />

            <section style={{ padding: '12rem 0 6rem' }}>
                <div className="container">
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '3rem', overflow: 'hidden', marginBottom: '8rem', border: '1px solid var(--white-10)' }}>
                        <Image src="/images/rhumba.png" alt="Rhumba Sessions" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                        <div style={{ position: 'absolute', bottom: '4rem', left: '4rem' }}>
                            <span style={{ color: 'var(--brand)', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.7rem' }}>Weekly Schedule</span>
                            <h1 className="section-title" style={{ marginTop: '1rem', marginBottom: 0 }}>LIVE <span className="text-gradient">SESSIONS</span></h1>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {events.map((event, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '2rem', border: '1px solid var(--white-5)', transition: 'all 0.4s ease' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                                    <div className="serif text-gradient" style={{ fontSize: '3rem', width: '200px' }}>{event.day}</div>
                                    <div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                                        <p style={{ color: 'var(--white-40)', fontWeight: 700 }}>Feat. {event.artist}</p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem' }}>{event.time}</div>
                                    <a href="/contact" className="btn btn-outline" style={{ fontSize: '0.6rem' }}>Book Table</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
