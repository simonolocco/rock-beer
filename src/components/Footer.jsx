import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-oswald font-bold text-white mb-2">
                        ROCK ME <span className="text-rock-beer">BEER</span>
                    </h2>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-rock-beer transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rock-beer transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rock-beer transition-colors">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
