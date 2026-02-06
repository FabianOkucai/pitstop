"use client";

import Image from 'next/image';

export default function EventsSection() {
    const events = [
        {
            title: "Rhumba Nights",
            description: "Experience the vibrant rhythms of East Africa with live performances by premier artists.",
            image: "/assets/images/experience.png"
        },
        {
            title: "Premium Brunch",
            description: "A curated weekend culinary journey featuring our signature grill selections and artisan pairings.",
            image: "/assets/images/staff.png"
        },
        {
            title: "Signature Cocktails",
            description: "Expertly crafted mixology and premium spirits served in an elegant, sophisticated atmosphere.",
            image: "/assets/images/menu_three.png"
        },
        {
            title: "Golden Moments",
            description: "Gather your closest friends for an unforgettable weekend. At Pitstop, we turn simple meetups into lasting memories through great food and pure vibes.",
            image: "/assets/images/experience_two.png"
        }
    ];

    return (
        <section id="events" className="section">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="events-layout" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="vertical-title events-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        EVENTS & EXPERIENCES
                    </div>

                    <div className="events-content" style={{ width: '100%' }}>
                        {/* Featured Experience Hero Image */}
                        <div className="animate-fadeIn" style={{
                            position: 'relative',
                            height: '500px',
                            width: '100%',
                            marginBottom: '6rem',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}>
                            <Image
                                src="/assets/images/experience_three.png"
                                alt="Main Experience"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))'
                            }}></div>
                        </div>

                        <div className="events-main" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                            {events.map((event, index) => (
                                <div key={index} className={`event-item ${index % 2 === 1 ? 'event-reverse' : ''} animate-fadeInUp animate-delay-${index + 1}`} style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '4rem',
                                    alignItems: 'center',
                                    width: '100%',
                                    textAlign: 'center'
                                }}>
                                    <div className={`event-image event-image-${index % 2} hover-scale`} style={{
                                        position: 'relative',
                                        height: '400px',
                                        width: '100%',
                                        borderRadius: '30px',
                                        overflow: 'hidden'
                                    }}>
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />

                                    </div>
                                    <div className="event-text" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '2rem'
                                    }}>

                                        <h3 className="event-title" style={{ marginBottom: '1.5rem' }}>
                                            <span className="event-title-main">
                                                {event.title.split(' ')[0]}
                                            </span>{' '}
                                            <span className="event-title-accent">
                                                {event.title.split(' ').slice(1).join(' ')}
                                            </span>
                                        </h3>
                                        <p className="event-description" style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
                                            {event.description}
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
