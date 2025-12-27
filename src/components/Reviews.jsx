import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Juan Perez",
        text: "¡La mejor onda de rock en Carlos Paz! Las hamburguesas son gigantes y la cerveza está helada.",
        stars: 5,
    },
    {
        name: "Maria Garcia",
        text: "Increíble lugar. La música en vivo le da el toque perfecto. ¡Un verdadero templo del Rock!",
        stars: 5,
    },
    {
        name: "RockLover88",
        text: "Gran ambiente, excelente pizza napolitana. Una parada obligatoria.",
        stars: 4,
    },
];

const Reviews = () => {
    return (
        <section className="py-20 bg-black/90 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-oswald font-bold uppercase mb-2">Lo que dicen los <span className="text-rock-beer">Rockeros</span></h2>
                    <div className="flex justify-center items-center gap-2 text-yellow-500">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={20} />)}
                        <span className="text-white ml-2 text-lg font-bold">(4.8/5)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-rock-beer/50 transition-colors"
                        >
                            <div className="flex gap-1 mb-4 text-rock-beer">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-4">"{review.text}"</p>
                            <div className="font-oswald font-bold uppercase tracking-wide text-sm text-gray-400">
                                - {review.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
