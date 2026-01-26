import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MenuPage() {
    const sections = [
        {
            title: "The Grill",
            image: "/images/food.png",
            items: [
                { name: "Prime Nyama Choma", price: "2,500", desc: "Slow-roasted goat meat served with kachumbari and ugali." },
                { name: "Pitstop Special Ribs", price: "3,200", desc: "Signature glaze, falling off the bone." },
                { name: "Grilled Chicken", price: "1,800", desc: "Marinated in local herbs and spices." }
            ]
        },
        {
            title: "The Drinks",
            image: "/images/cocktail.png",
            items: [
                { name: "Single Malt Selection", price: "Varies", desc: "Check our elite whiskey shelf." },
                { name: "Nairobi Mule", price: "950", desc: "Vodka, fresh ginger, lime, and local honey." },
                { name: "Rhumba Punch", price: "1,200", desc: "A tropical blend with a kick." }
            ]
        }
    ];

    return (
        <main className="menu-page">
            <Navbar />

            <section style={{ padding: '12rem 0 6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                        <span style={{ color: 'var(--brand)', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.7rem' }}>Premium Selection</span>
                        <h1 className="section-title" style={{ marginTop: '1rem' }}>THE <span className="text-gradient">MENU</span></h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem' }}>
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '2rem', overflow: 'hidden', marginBottom: '3rem', border: '1px solid var(--white-10)' }}>
                                    <Image src={section.image} alt={section.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--white-10)' }}>{section.title}</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                    {section.items.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.name}</h4>
                                                <p style={{ color: 'var(--white-40)', fontSize: '0.9rem' }}>{item.desc}</p>
                                            </div>
                                            <div style={{ color: 'var(--brand)', fontWeight: 900, fontSize: '1.25rem' }}>KES {item.price}</div>
                                        </div>
                                    ))}
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
