"use client";

import Image from 'next/image';

export default function EventsSection() {
    const events = [
        {
            date: "Every Friday",
            title: "Rhumba Nights",
            description: "East Africa's finest artists",
            time: "8:00 PM - Late",
            image: "/images/rhumba.png"
        },
        {
            date: "Weekends",
            title: "Premium Brunch",
            description: "Elevated weekend dining",
            time: "10:00 AM - 3:00 PM",
            image: "/images/food.png"
        },
        {
            date: "Daily",
            title: "Evening Elixirs",
            description: "Where spirits dance in crystal dreams.",
            time: "5:00 PM - 9:00 PM",
            image: "/images/cocktail.png"
        },
        {
            date: "Saturdays",
            title: "Vintage Moments",
            description: "Time flows like aged wine.",
            time: "2:00 PM - 7:00 PM",
            image: "/images/drink.png"
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
                        <div className="events-main" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                            {events.map((event, index) => (
                                <div key={index} className={`event-item ${index % 2 === 1 ? 'event-reverse' : ''}`} style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '4rem',
                                    alignItems: 'center',
                                    width: '100%',
                                    textAlign: 'center'
                                }}>
                                    <div className={`event-image event-image-${index % 2}`} style={{
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
                                        <div className="event-date" style={{ marginBottom: '1rem' }}>
                                            {event.date}
                                        </div>
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
                                        <div className="event-time">
                                            {event.time}
                                        </div>
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
