import React from 'react';
import { motion } from 'framer-motion';
import { Music, Beer, Utensils } from 'lucide-react';

const featureData = [
    {
        icon: <Music size={40} />,
        title: "Rock en Vivo",
        description: "Las mejores bandas de la región tocando en vivo. Desde rock clásico hasta hits modernos."
    },
    {
        icon: <Beer size={40} />,
        title: "Cerveza Artesanal",
        description: "Una amplia selección de las mejores cervezas artesanales. IPA, Stout, Honey y más."
    },
    {
        icon: <Utensils size={40} />,
        title: "Comida Gourmet",
        description: "Hamburguesas deliciosas, pizzas y snacks diseñados para acompañar tu pinta."
    }
];

const Features = () => {
    return (
        <section id="vibe" className="py-24 bg-rock-dark relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-rock-beer/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-rock-accent/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4 uppercase tracking-wide">
                        La <span className="text-rock-beer">Onda</span>
                    </h2>
                    <div className="h-1 w-20 bg-rock-accent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featureData.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white/5 border border-white/10 p-8 rounded-lg text-center hover:bg-white/10 hover:border-rock-beer/50 transition-all duration-300"
                        >
                            <div className="inline-block p-4 rounded-full bg-rock-dark text-rock-beer mb-6 border border-white/10 group-hover:border-rock-beer group-hover:scale-110 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-oswald font-bold text-white mb-3 uppercase">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
