import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navLinks = [
        { name: 'INICIO', href: '#hero' },
        { name: 'ONDA', href: '#vibe' },
        { name: 'MENU', href: '#menu' },
        { name: 'UBICACIÓN', href: '#location' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={clsx(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    scrolled ? "py-2" : "py-4 md:py-6"
                )}
            >
                <div className={clsx(
                    "mx-4 md:container md:mx-auto flex justify-between items-center rounded-2xl px-6 py-3 transition-all duration-300",
                    scrolled ? "bg-black/90 backdrop-blur-lg border border-white/10 shadow-2xl" : "bg-black/20 backdrop-blur-sm border border-white/5"
                )}>
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group z-50">
                        <div className="font-oswald text-2xl font-bold tracking-wider text-white group-hover:text-rock-beer transition-colors">
                            ROCK ME <span className="text-rock-beer">BEER</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-widest text-white/80 hover:text-rock-beer transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/3541337577"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-rock-beer text-black px-5 py-2 rounded-lg font-oswald font-bold uppercase tracking-wide hover:bg-white transition-colors"
                        >
                            Reservar
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button - Now part of the floating bar */}
                    <button
                        className="md:hidden text-white hover:text-rock-beer transition-colors z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Full Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center md:hidden"
                    >
                        {/* Background blobs for style */}
                        <div className="absolute top-20 right-20 w-64 h-64 bg-rock-beer/20 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-20 left-20 w-64 h-64 bg-rock-accent/20 rounded-full blur-[80px]"></div>

                        <div className="flex flex-col gap-8 text-center relative z-10 w-full px-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="text-4xl font-oswald font-bold text-white hover:text-rock-beer transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <a
                                    href="https://wa.me/3541337577"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-rock-beer text-black px-8 py-4 rounded-xl font-oswald font-bold text-xl uppercase tracking-wider hover:bg-white transition-colors w-full max-w-xs"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Reservar Mesa
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
