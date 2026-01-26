"use client";

export default function Testimonials() {
    const testimonials = [
        {
            name: "David Mwangi",
            role: "Business Executive",
            text: "PITSTOP has become our go-to venue for corporate dinners. The ambiance is perfect, the food exceptional, and the service impeccable.",
            rating: 5
        },
        {
            name: "Grace Wanjiru",
            role: "Event Planner",
            text: "I've organized multiple events here and every single one has been a success. The staff goes above and beyond to ensure everything is perfect.",
            rating: 5
        },
        {
            name: "John Kamau",
            role: "Food Enthusiast",
            text: "The Nyama Choma here is absolutely legendary. Combined with the live Rhumba sessions, it's an experience you can't get anywhere else in Nairobi.",
            rating: 5
        }
    ];

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="testimonials-layout">
                    <div className="vertical-title">
                        CUSTOMER TESTIMONIALS
                    </div>
                    <div className="testimonials-content">
                        <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card" style={{ padding: '2rem' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} style={{ 
                                        color: 'var(--accent)', 
                                        fontSize: '1.5rem',
                                        marginRight: '0.25rem'
                                    }}>
                                        ⭐
                                    </span>
                                ))}
                            </div>
                            
                            <p style={{
                                fontFamily: 'Bahiana, sans-serif',
                                fontSize: '1.25rem',
                                lineHeight: '1.6',
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                "{testimonial.text}"
                            </p>
                            
                            <div>
                                <h4 style={{
                                    fontFamily: 'Bahiana, sans-serif',
                                    fontSize: '1.375rem',
                                    fontWeight: '400',
                                    marginBottom: '0.25rem',
                                    color: 'var(--foreground)'
                                }}>
                                    {testimonial.name}
                                </h4>
                                <p style={{
                                    fontFamily: 'Bahiana, sans-serif',
                                    fontSize: '1.125rem',
                                    color: 'var(--accent-dark)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
