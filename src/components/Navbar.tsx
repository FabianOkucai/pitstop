"use client";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <a href="#top" className="logo">
                    PITSTOP
                </a>
                
                <ul className="nav-links">
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#booking">Booking</a></li>
                </ul>
            </div>
        </nav>
    );
}
