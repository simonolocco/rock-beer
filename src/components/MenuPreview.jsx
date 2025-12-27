import React from 'react';
import { motion } from 'framer-motion';

const MenuPreview = () => {
    return (
        <section id="menu" className="py-16 md:py-24 bg-neutral-900 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                            alt="Hamburguesa y Cerveza"
                            className="rounded-lg shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6 uppercase">
                            Sabores <span className="text-rock-beer">Legendarios</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Nuestro menú está diseñado para satisfacer a los rockeros más hambrientos. Hincale el diente a nuestras hamburguesas exclusivas, compartí una pizza al horno de barro con amigos, o disfrutá unos nachos mientras cabeceas un tema.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Hamburguesas Estilo Americano - 100% Carne',
                                'Pizzas Napolitanas al Horno de Barro',
                                'Selección Exclusiva de Cerveza Artesanal',
                                'Limonadas de Autor y Tragos'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white font-oswald tracking-wide text-xl">
                                    <span className="w-2 h-2 bg-rock-accent rounded-full shadow-[0_0_10px_#DC2626]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a href="https://wa.me/3541337577" className="inline-block border-b-2 border-rock-beer text-rock-beer pb-1 font-oswald uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                            Ver cartas completas en WhatsApp
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MenuPreview;
