import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'INICIO', href: '#hero' },
        { name: 'ONDA', href: '#vibe' },
        { name: 'MENU', href: '#menu' },
        { name: 'UBICACIÓN', href: '#location' },
    ];

    return (
        <nav className={clsx(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-rock-dark/95 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    {/* Logo / Brand Name */}
                    <div className="font-oswald text-2xl md:text-3xl font-bold tracking-wider text-white group-hover:text-rock-beer transition-colors">
                        ROCK ME <span className="text-rock-beer">BEER</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-widest text-white/80 hover:text-rock-beer transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-rock-beer after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/3541337577"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-rock-beer text-black px-6 py-2 font-oswald font-bold uppercase tracking-wide hover:bg-white transition-colors skew-x-[-10deg] flex items-center gap-2"
                    >
                        <span className="skew-x-[10deg]">Reservar</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-rock-beer transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-rock-dark border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-oswald text-white/90 hover:text-rock-beer py-2 border-b border-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/3541337577"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-rock-beer text-black text-center py-3 font-bold uppercase font-oswald mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Reservar Ahora
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
