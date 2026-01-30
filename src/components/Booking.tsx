"use client";

export default function Booking() {
    return (
        <section id="booking" className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    <div>
                        <div className="label" style={{ marginBottom: '1rem' }}>
                            Reserve Your Experience
                        </div>
                        <h2 className="display-medium" style={{ marginBottom: '1.5rem' }}>
                            Book Your <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Table</span>
                        </h2>
                        <p className="body-large" style={{ marginBottom: '2rem' }}>
                            Secure your spot for an unforgettable evening of exceptional cuisine, live music, and premium service.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <a href="/book" className="btn-primary">
                                Make Reservation
                            </a>
                            <a href="tel:+254700000000" className="btn-outline">
                                Call Us
                            </a>
                        </div>
                        <div style={{
                            padding: '1.5rem',
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '0'
                        }}>
                            <div className="label" style={{ marginBottom: '0.5rem' }}>
                                Quick Contact
                            </div>
                            <p style={{
                                fontFamily: 'Changa One, sans-serif',
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                lineHeight: '1.6'
                            }}>
                                For same-day reservations or special requests, call us directly at{' '}
                                <strong style={{ color: 'var(--accent)' }}>+254 700 000 000</strong>
                            </p>
                        </div>
                    </div>

                    <div style={{
                        background: 'white',
                        padding: '3rem',
                        boxShadow: '0 4px 24px var(--shadow)'
                    }}>
                        <h3 className="heading-large" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            Reservation Details
                        </h3>
                        
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    style={{
                                        padding: '1rem',
                                        border: '1px solid var(--border)',
                                        fontFamily: 'Changa One, sans-serif',
                                        fontSize: '0.875rem',
                                        background: 'var(--surface)'
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    style={{
                                        padding: '1rem',
                                        border: '1px solid var(--border)',
                                        fontFamily: 'Changa One, sans-serif',
                                        fontSize: '0.875rem',
                                        background: 'var(--surface)'
                                    }}
                                />
                            </div>
                            
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{
                                    padding: '1rem',
                                    border: '1px solid var(--border)',
                                    fontFamily: 'Changa One, sans-serif',
                                    fontSize: '0.875rem',
                                    background: 'var(--surface)'
                                }}
                            />
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input
                                    type="date"
                                    style={{
                                        padding: '1rem',
                                        border: '1px solid var(--border)',
                                        fontFamily: 'Changa One, sans-serif',
                                        fontSize: '0.875rem',
                                        background: 'var(--surface)'
                                    }}
                                />
                                <select style={{
                                    padding: '1rem',
                                    border: '1px solid var(--border)',
                                    fontFamily: 'Changa One, sans-serif',
                                    fontSize: '0.875rem',
                                    background: 'var(--surface)'
                                }}>
                                    <option>Party Size</option>
                                    <option>2 People</option>
                                    <option>4 People</option>
                                    <option>6 People</option>
                                    <option>8+ People</option>
                                </select>
                            </div>
                            
                            <textarea
                                placeholder="Special Requests (Optional)"
                                rows={3}
                                style={{
                                    padding: '1rem',
                                    border: '1px solid var(--border)',
                                    fontFamily: 'Changa One, sans-serif',
                                    fontSize: '0.875rem',
                                    background: 'var(--surface)',
                                    resize: 'vertical'
                                }}
                            />
                            
                            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                Confirm Reservation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
