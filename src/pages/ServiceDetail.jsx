import SecurityArchitectureDiagram from '../components/SecurityArchitectureDiagram';
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import NotFound from './NotFound';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <NotFound />;
    }

    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
        >
            {/* Service Hero */}
            <div className="pt-32 pb-16 bg-[var(--color-bg-secondary)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container relative z-10">
                    <button
                        onClick={() => navigate('/services')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to All Services
                    </button>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-xl shadow-red-900/20 shrink-0">
                            <Icon size={40} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                                {service.shortDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Visual Architecture for High-Tech Services */}
                        {(service.id === 'ai-powered-solutions' || service.id === 'cybersecurity-solutions') && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-[var(--color-primary)] pl-4">System Architecture</h2>
                                <SecurityArchitectureDiagram />
                            </div>
                        )}

                        <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-[var(--color-primary)] pl-4">Overview</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-12">
                            {service.fullDescription}
                        </p>

                        <h2 className="text-2xl font-bold mb-8 text-white">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-white/5 hover:border-[var(--color-primary)]/30 transition-colors">
                                    <CheckCircle className="text-[var(--color-primary)] mt-1 shrink-0" size={20} />
                                    <span className="text-gray-200 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-[var(--color-bg-secondary)] p-8 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
                            <p className="text-gray-400 mb-8 text-sm">
                                Get a customized plan for your {service.title} needs.
                            </p>
                            <Link
                                to="/contact"
                                className="w-full btn btn-primary flex justify-center items-center gap-2"
                            >
                                Contact Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
