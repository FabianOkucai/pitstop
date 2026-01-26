"use client";

import Image from 'next/image';

export default function MenuSection() {
    const menuItems = [
        {
            category: "Signature Grills",
            items: [
                { name: "Premium Nyama Choma", description: "Slow-grilled perfection", price: "KSh 2,800" },
                { name: "Wagyu Beef Steak", description: "Grade A5 excellence", price: "KSh 4,500" },
                { name: "Grilled Tilapia", description: "Lake Victoria fresh", price: "KSh 1,800" },
                { name: "Grilled Salmon", description: "Atlantic premium cut", price: "KSh 3,200" },
                { name: "Red Snapper", description: "Ocean fresh delight", price: "KSh 2,400" },
                { name: "Grilled Chicken", description: "Free-range perfection", price: "KSh 1,500" },
                { name: "Pork Ribs", description: "Smoky barbecue style", price: "KSh 2,200" }
            ]
        },
        {
            category: "Local Favorites",
            items: [
                { name: "Ugali Special", description: "Traditional maize meal", price: "KSh 200" },
                { name: "Sukuma Wiki", description: "Fresh collard greens", price: "KSh 300" },
                { name: "Githeri Deluxe", description: "Beans and maize", price: "KSh 450" },
                { name: "Chapati Fresh", description: "Soft flatbread", price: "KSh 150" }
            ]
        },
        {
            category: "Craft Cocktails",
            items: [
                { name: "Rhumba Sunset", description: "Rum, passion, lime", price: "KSh 950" },
                { name: "Nairobi Nights", description: "Gin, elderflower magic", price: "KSh 850" },
                { name: "Safari Mule", description: "Vodka, ginger, baobab", price: "KSh 750" }
            ]
        },
        {
            category: "Del Monte Juices",
            items: [
                { name: "Pineapple Juice", description: "Pure tropical sweetness", price: "KSh 350" },
                { name: "Orange Juice", description: "Fresh citrus burst", price: "KSh 300" },
                { name: "Mango Juice", description: "Exotic fruit blend", price: "KSh 380" },
                { name: "Apple Juice", description: "Crisp orchard fresh", price: "KSh 320" }
            ]
        },
        {
            category: "Premium Spirits",
            items: [
                { name: "Hennessy Paradis", description: "Cognac excellence", price: "KSh 45,000" },
                { name: "Dom Perignon", description: "Champagne royalty", price: "KSh 28,000" },
                { name: "Macallan 25", description: "Scottish whisky legend", price: "KSh 85,000" },
                { name: "Grey Goose", description: "Premium vodka", price: "KSh 12,000" },
                { name: "Martell Cordon Bleu", description: "French cognac", price: "KSh 18,000" }
            ]
        }
    ];

    return (
        <section id="menu" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="menu-layout">
                    <div className="vertical-title menu-title">
                        <span style={{ color: 'var(--foreground)' }}>OUR</span>{' '}
                        <span style={{ color: 'var(--accent)' }}>MENU</span>
                    </div>
                    <div className="menu-content">
                        {/* Hero Image Section */}
                        <div style={{
                            position: 'relative',
                            height: '400px',
                            marginBottom: '4rem',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            background: 'var(--foreground)'
                        }}>
                            <Image
                                src="/images/food.png"
                                alt="Our Menu"
                                fill
                                style={{ objectFit: 'cover', opacity: 0.7 }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <div>
                                    <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                                        Curated Selection
                                    </div>
                                    <h2 className="display-medium" style={{ color: 'white' }}>
                                        Our Menu
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="menu-grid">
                            {menuItems.map((category, index) => (
                                <div key={index} className={`menu-category ${index === 0 ? 'menu-category-main' : ''}`}>
                                    <h3 className="heading-large" style={{
                                        marginBottom: '2rem',
                                        paddingBottom: '1rem',
                                        borderBottom: '2px solid var(--accent)'
                                    }}>
                                        <span style={{ color: 'var(--foreground)' }}>
                                            {category.category.split(' ')[0]}
                                        </span>{' '}
                                        <span style={{ color: 'var(--accent)' }}>
                                            {category.category.split(' ').slice(1).join(' ')}
                                        </span>
                                    </h3>

                                    <div className="menu-items-grid">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} style={{
                                                padding: '1.5rem',
                                                background: 'rgba(0,0,0,0.02)',
                                                borderRadius: '15px'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '0.5rem'
                                                }}>
                                                    <h4 style={{
                                                        fontFamily: 'Bahiana, sans-serif',
                                                        fontSize: '1.25rem',
                                                        fontWeight: '400',
                                                        flex: 1
                                                    }}>
                                                        <span style={{ color: 'var(--foreground)' }}>
                                                            {item.name.split(' ').slice(0, Math.ceil(item.name.split(' ').length / 2)).join(' ')}
                                                        </span>{' '}
                                                        <span style={{ color: 'var(--accent)' }}>
                                                            {item.name.split(' ').slice(Math.ceil(item.name.split(' ').length / 2)).join(' ')}
                                                        </span>
                                                    </h4>
                                                    <div style={{
                                                        fontFamily: 'Bahiana, sans-serif',
                                                        fontSize: '1.25rem',
                                                        fontWeight: '400',
                                                        color: 'var(--accent-dark)',
                                                        marginLeft: '1rem'
                                                    }}>
                                                        {item.price}
                                                    </div>
                                                </div>
                                                <p style={{
                                                    fontFamily: 'Bahiana, sans-serif',
                                                    fontSize: '1rem',
                                                    color: 'var(--text-muted)',
                                                    lineHeight: '1.4'
                                                }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
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
