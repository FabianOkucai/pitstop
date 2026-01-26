import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ReservationsPage() {
    return (
        <main>
            <Navbar />

            <section style={{ padding: '12rem 0 6rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: 'var(--brand)', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.7rem' }}>Get in Touch</span>
                            <h1 className="section-title" style={{ marginTop: '1rem', fontSize: '5rem' }}>RESERVE <br /><span className="text-gradient">YOUR SPOT</span></h1>
                            <p style={{ color: 'var(--white-40)', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '500px' }}>
                                Planning a night out or a special celebration? Tell us your plans and we'll ensure the perfect setup for your Pitstop experience.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.8rem' }}>Location</h4>
                                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>Langata Road, Nairobi</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontSize: '0.8rem' }}>Call Us</h4>
                                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>+254 712 688699</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '4rem', borderRadius: '2.5rem', border: '1px solid var(--white-10)', backdropFilter: 'blur(40px)' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Full Name</label>
                                    <input type="text" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--white-10)', borderRadius: '12px', padding: '1.25rem', color: 'white', outline: 'none' }} placeholder="John Doe" />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Date</label>
                                        <input type="date" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--white-10)', borderRadius: '12px', padding: '1.25rem', color: 'white', outline: 'none' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Guests</label>
                                        <input type="number" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--white-10)', borderRadius: '12px', padding: '1.25rem', color: 'white', outline: 'none' }} placeholder="2" />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Special Requests</label>
                                    <textarea rows={4} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--white-10)', borderRadius: '12px', padding: '1.25rem', color: 'white', outline: 'none', resize: 'none' }} placeholder="VIP corner, birthday cake, etc."></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1.5rem' }}>Request Reservation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
