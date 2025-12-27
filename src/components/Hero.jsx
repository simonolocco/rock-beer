import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Music, Beer } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                    alt="Rock Bar Atmosphere"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-rock-dark"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4 text-rock-beer font-medium tracking-[0.2em] uppercase">
                        <Music size={18} />
                        <span>Est. Carlos Paz</span>
                        <Beer size={18} />
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-oswald font-bold text-white mb-2 tracking-tighter shadow-black drop-shadow-lg">
                        TEMPLO DEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-rock-beer to-orange-600">ROCK</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        El destino definitivo para los amantes de la cerveza artesanal y las almas del rock and roll.
                        Sentí la vibración, la música y el sabor.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/3541337577"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-rock-beer text-black px-8 py-4 font-oswald font-bold text-xl uppercase tracking-wider skew-x-[-10deg] border-2 border-rock-beer hover:bg-transparent hover:text-rock-beer transition-colors"
                        >
                            <span className="skew-x-[10deg] block">Reservar Mesa</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#menu"
                            className="px-8 py-4 font-oswald font-bold text-xl uppercase tracking-wider text-white border-2 border-white/20 hover:border-rock-beer hover:text-rock-beer transition-colors skew-x-[-10deg]"
                        >
                            <span className="skew-x-[10deg] block">Ver Menú</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
