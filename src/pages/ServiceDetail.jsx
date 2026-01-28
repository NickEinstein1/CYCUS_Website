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
            <div className="pt-48 pb-24 px-8 md:px-12 bg-[var(--color-bg-secondary)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container relative z-10 max-w-[1400px] mx-auto">
                    <button
                        onClick={() => navigate('/services')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-wider font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to All Services
                    </button>

                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-28 h-28 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-xl shadow-red-900/20 shrink-0">
                            <Icon size={56} />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{service.title}</h1>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed">
                                {service.shortDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-32 px-8 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Visual Architecture for High-Tech Services */}
                        {(service.id === 'ai-powered-solutions' || service.id === 'cybersecurity-solutions') && (
                            <div className="mb-20">
                                <h2 className="text-4xl font-bold mb-10 text-white border-l-4 border-[var(--color-primary)] pl-8">System Architecture</h2>
                                <SecurityArchitectureDiagram />
                            </div>
                        )}

                        <h2 className="text-4xl font-bold mb-10 text-white border-l-4 border-[var(--color-primary)] pl-8">Overview</h2>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-20 max-w-3xl">
                            {service.fullDescription}
                        </p>

                        <h2 className="text-4xl font-bold mb-12 text-white">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-5 p-10 rounded-2xl bg-[var(--color-bg-secondary)] border border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10">
                                    <CheckCircle className="text-[var(--color-primary)] mt-1 shrink-0" size={24} />
                                    <span className="text-gray-200 font-medium text-lg leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-[var(--color-bg-secondary)] p-12 rounded-2xl border border-white/5 shadow-2xl">
                            <h3 className="text-3xl font-bold mb-6 text-white">Ready to start?</h3>
                            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                                Get a customized plan for your {service.title} needs.
                            </p>
                            <Link
                                to="/contact"
                                className="w-full btn btn-primary flex justify-center items-center gap-2 py-5 text-lg font-semibold"
                            >
                                Contact Us
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
