"use client";

import Image from 'next/image';

export default function MenuSection() {
    const menuItems = [
        {
            category: "Signature Grills",
            items: [
                { name: "Premium Nyama Choma", description: "Slow-grilled perfection" },
                { name: "Wagyu Beef Steak", description: "Grade A5 excellence" },
                { name: "Grilled Tilapia", description: "Lake Victoria fresh" },
                { name: "Grilled Chicken", description: "Free-range perfection" }
            ]
        },
        {
            category: "Local Favorites",
            items: [
                { name: "Ugali Special", description: "Traditional maize meal" },
                { name: "Sukuma Wiki", description: "Fresh collard greens" },
                { name: "Chapati Fresh", description: "Soft flatbread" }
            ]
        },
        {
            category: "Craft Cocktails",
            items: [
                { name: "PITSTOP Signature", description: "House special blend" },
                { name: "Nairobi Nights", description: "Premium whiskey cocktail" },
                { name: "Tropical Sunset", description: "Rum-based delight" }
            ]
        },
        {
            category: "Premium Drinks",
            items: [
                { name: "Tusker Lager", description: "Kenya's finest beer" },
                { name: "Guinness Stout", description: "Rich and creamy" },
                { name: "Johnnie Walker Black", description: "Premium Scotch whisky" }
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
                                        marginBottom: '1rem',
                                        paddingBottom: '1rem'
                                    }}>
                                        <span style={{ color: 'var(--foreground)' }}>
                                            {category.category.split(' ')[0]}
                                        </span>{' '}
                                        <span style={{ color: 'var(--accent)' }}>
                                            {category.category.split(' ').slice(1).join(' ')}
                                        </span>
                                    </h3>

                                    {/* Line between title and menu items */}
                                    <div style={{
                                        width: '100%',
                                        height: '1px',
                                        background: 'linear-gradient(90deg, transparent 0%, var(--accent) 20%, var(--accent) 80%, transparent 100%)',
                                        marginBottom: '2rem',
                                        boxShadow: '0 0 5px rgba(255, 215, 0, 0.2)'
                                    }}></div>

                                    <div className="menu-items-grid">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className={`animate-fadeInUp animate-delay-${itemIndex + 1} hover-scale`} style={{
                                                padding: '1.5rem',
                                                background: 'rgba(0,0,0,0.02)',
                                                borderRadius: '15px',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '0.5rem'
                                                }}>
                                                    <h4 style={{
                                                        fontFamily: 'Changa One, sans-serif',
                                                        fontSize: '1rem',
                                                        fontWeight: '400',
                                                        flex: 1
                                                    }}>
                                                        <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>
                                                            {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][itemIndex]}.
                                                        </span>
                                                        <span style={{ color: 'var(--foreground)' }}>
                                                            {item.name.split(' ').slice(0, Math.ceil(item.name.split(' ').length / 2)).join(' ')}
                                                        </span>{' '}
                                                        <span style={{ color: 'var(--accent)' }}>
                                                            {item.name.split(' ').slice(Math.ceil(item.name.split(' ').length / 2)).join(' ')}
                                                        </span>
                                                    </h4>
                                                </div>
                                                <p style={{
                                                    fontFamily: 'Changa One, sans-serif',
                                                    fontSize: '0.875rem',
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
