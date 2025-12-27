import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-0 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[600px]">
                {/* Info Side */}
                <div className="bg-rock-dark p-12 flex flex-col justify-center items-start">
                    <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-8 uppercase">
                        Encontranos
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-rock-beer mt-1 shrink-0" size={32} />
                            <div>
                                <h3 className="text-2xl font-oswald font-bold text-white mb-2">Dirección</h3>
                                <p className="text-gray-400 text-lg">Villa Carlos Paz, Córdoba</p>
                                <p className="text-gray-500 text-sm mt-1">Av. Libertad y Saavedra</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-rock-beer mt-1 shrink-0" size={32} />
                            <div>
                                <h3 className="text-2xl font-oswald font-bold text-white mb-2">Llamanos</h3>
                                <a href="tel:3541337577" className="text-gray-400 text-lg hover:text-white transition-colors">
                                    3541-337577
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MessageCircle className="text-rock-beer mt-1 shrink-0" size={32} />
                            <div>
                                <h3 className="text-2xl font-oswald font-bold text-white mb-2">WhatsApp</h3>
                                <p className="text-gray-400 mb-4">Reservá tu mesa al instante.</p>
                                <a
                                    href="https://wa.me/3541337577"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors font-bold font-oswald uppercase"
                                >
                                    Enviar Mensaje
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Side */}
                <div className="w-full h-full bg-gray-900 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13619.123456789!2d-64.49!3d-31.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI0JzAwLjAiUyA2NMKwMjknMjQuMCJX!5e0!3m2!1sen!2sar!4v1234567890123!5m2!1sen!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Rock Me Beer Location"
                    ></iframe>

                    {/* Mobile Map Button Overlay */}
                    <div className="absolute bottom-4 right-4 z-10">
                        <a
                            href="https://maps.app.goo.gl/s5JBdpt9GrQ27SEq9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-rock-beer text-black p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <MapPin size={24} />
                            <span className="ml-2 font-bold font-oswald uppercase hidden md:inline">Ver en Maps</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
