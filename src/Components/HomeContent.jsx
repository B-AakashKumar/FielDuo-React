//HomeContent.jsx
'use client';
import Pricing from './Pricing';
import { useState, useEffect } from 'react';

// --- Data Definitions (Shared Constants) ---
// This data is kept at the top level for clarity and can be easily moved or managed.

const FEATURES_DATA = [
    {
        title: "Smart Scheduling",
        description: "Intelligent scheduling that automatically optimizes routes and assigns the best technician for the job.",
        icon: "📅",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Real-Time Tracking",
        description: "Live GPS tracking of your team with automated customer notifications.",
        icon: "📍",
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "Digital Invoicing",
        description: "Generate professional invoices and get paid faster with integrated payment options.",
        icon: "📄",
        color: "from-green-500 to-emerald-400"
    },
    {
        title: "Customer Portal",
        description: "A self-service portal for clients to book services and track job progress.",
        icon: "👥",
        color: "from-orange-500 to-amber-400"
    }
];

const KEY_VALUE_PROPOSITIONS = [ // KEPT: Used within WhyChooseFielduoSection
    {
        title: "Streamline Operations",
        description: "Automated scheduling, dispatching, and work order management.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        title: "Boost Productivity",
        description: "Mobile-first workflows with full offline support for field teams.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Enhance Customer Experience",
        description: "24/7 customer portal with real-time updates and transparency.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Increase Revenue",
        description: "Smart pricing tools, upsell workflows, and retention boosters.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const EXTENDED_FEATURES = [ // KEPT: Used within WhyChooseFielduoSection
    {
        title: "AI-Powered Scheduling",
        description: "Auto-assign jobs based on skills, location, and availability—minimizing admin and maximizing field efficiency.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Mobile App (Offline-First)",
        description: "Works seamlessly with or without WiFi/data. No connectivity? No problem—fieldwork continues and syncs automatically.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Real-Time Analytics",
        description: "Instant dashboards and reporting for all your jobs, revenue, and technician KPIs in a single view.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        title: "IoT & AI Integration",
        description: "Integrate smart devices, sensors, and leverage AI automation with zero hassle—future-proof your operations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: "Secure Cloud Platform",
        description: "Reliable, scalable, and accessible worldwide. Rock-solid infrastructure with encryption and compliance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    }
];

const INDUSTRIES = [
    { name: "HVAC", description: "Heating, Ventilation, and Air Conditioning" },
    { name: "Plumbing", description: "Expert plumbing solutions" },
    { name: "Electrical", description: "Professional electrical services" },
    { name: "Appliance Repair", description: "Reliable appliance fixes" },
    { name: "Facility Management", description: "Comprehensive facility services" },
    { name: "Pest Control", description: "Effective pest solutions" }
];

// --- Helper Function (Orbs) ---
const generateOrbs = (count = 6) => {
    return [...Array(count)].map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 500 + 300}px`,
        height: `${Math.random() * 500 + 300}px`,
        animation: `pulse${Math.floor(Math.random() * 3) + 1} ${Math.random() * 20 + 15}s infinite ease-in-out`,
        delay: `${Math.random() * 5}s`,
    }));
};

// --- Child Component: HeroSection ---
const HeroSection = ({ currentDate, isHovering, setIsHovering, createRipple }) => (
    <section className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-down">
        {/* Tagline */}
        <div className="inline-block mb-4 md:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30 shadow-lg" data-aos="zoom-in" data-aos-delay="200">
            <span className="text-indigo-300 font-medium flex items-center justify-center gap-2 text-xs sm:text-sm">
                <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                The Future of Field Service Management
            </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-2 md:mb-3 leading-tight px-2" data-aos="fade-up" data-aos-delay="300">
            <span className="block mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                AI-Powered Field Operations
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                That Actually Work
            </span>
        </h1>
        
        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-6 md:mb-8 px-4" data-aos="fade-up" data-aos-delay="400">
            An all-in-one platform for scheduling, dispatching, invoicing, and customer management, built for maximum efficiency.
        </p>
        
        {/* CTA Buttons - Refactored for semantic correctness */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 md:mb-8 px-4" data-aos="fade-up" data-aos-delay="500">
            <a 
                href="#Contact"
                role="button"
                className="group relative px-8 py-3 sm:px-10 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-base overflow-hidden text-white transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-indigo-500/50 inline-block"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={createRipple}
            >
                <span className="relative z-10">Start Your Free Trial</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
            </a>
            <a 
                href="#Pricing" 
                className="group relative px-8 py-3 sm:px-10 sm:py-3 border border-gray-600 bg-gray-800/50 rounded-xl font-bold text-base text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50 hover:border-indigo-500 w-full sm:w-auto flex items-center justify-center"
            >
                <span className="relative z-10">View Pricing &rarr;</span>
            </a>
        </div>
        
        {/* Trust Indicators & Date */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 text-gray-400 text-xs sm:text-sm px-4" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>15-Day Free Trial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Cancel anytime</span>
            </div>
        </div>
        
        {/* Current Date Display */}
        <div className="mt-3 text-center" data-aos="fade-up" data-aos-delay="700">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700/50">
                <span className="text-indigo-300 text-sm">📅</span>
                <span className="text-gray-300 text-xs font-medium">{currentDate}</span>
            </div>
        </div>
    </section>
);

// --- Child Component: FeaturesSection ---
const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="mb-16 md:mb-24 relative pt-6" data-aos="fade-up">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-10 px-4">
                <div className="inline-block mb-2 md:mb-3 px-3 py-1 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
                    <span className="text-indigo-300 font-medium text-xs sm:text-sm">POWERFUL FEATURES</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2 md:mb-3"> 
                    Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Succeed</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                    Our comprehensive platform provides all the tools necessary to streamline your field service operations and boost profitability.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Feature List (Left Column) */}
                <div data-aos="fade-right">
                    <div className="space-y-3 px-2"> 
                        {FEATURES_DATA.map((feature, index) => (
                            <div
                                key={index}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActiveFeature(index)}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveFeature(index)}
                                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border-l-4 border-indigo-500 shadow-xl'
                                        : 'bg-gray-800/40 hover:bg-gray-700/40 border-l-4 border-transparent'
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={100 * index}
                            >
                                {activeFeature === index && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"></div>
                                )}
                                <div className="flex items-start gap-3 relative z-10">
                                    <div className={`text-xl md:text-2xl p-2 rounded-lg shadow-lg flex items-center justify-center border border-transparent ${
                                        activeFeature === index 
                                            ? `bg-gradient-to-br ${feature.color} border-white/20 animate-pulse-slow` 
                                            : 'bg-gray-700/50'
                                    }`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-0.5">{feature.title}</h3> 
                                        <p className="text-gray-300 text-sm">{feature.description}</p> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Feature Visualization (Right Column) */}
                <div className="relative h-60 md:h-72 lg:h-80 flex items-center justify-center mt-6 lg:mt-0 px-4" data-aos="fade-left" data-aos-delay="300">
                    <div className="absolute inset-4 sm:inset-6 bg-gray-900/80 border-4 border-indigo-500/50 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-black/50 absolute z-0 backdrop-blur-sm"></div>
                        <div className="relative z-10 text-center p-3">
                            <div className="text-5xl md:text-7xl lg:text-8xl mb-3 text-white animate-fade-in">{FEATURES_DATA[activeFeature].icon}</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                                {FEATURES_DATA[activeFeature].title}
                            </h3>
                            <p className="text-gray-300 max-w-xs mx-auto text-sm">{FEATURES_DATA[activeFeature].description}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center pb-3">
                        <div className="flex space-x-2">
                            {FEATURES_DATA.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveFeature(idx)}
                                    aria-label={`Show feature ${idx + 1}: ${FEATURES_DATA[idx].title}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === activeFeature  
                                            ? 'bg-indigo-500 w-4'  
                                            : 'bg-gray-600 w-2 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Child Component: WhyChooseFielduoSection ---
const WhyChooseFielduoSection = () => {
    const [activeTab, setActiveTab] = useState('features');

    return (
        <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Why Choose Fielduo
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover the features that make Fielduo the perfect solution for your business needs
                    </p>
                </div>
                
                {/* Key Value Propositions */}
                <div className="mb-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-200">Key Value Propositions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {KEY_VALUE_PROPOSITIONS.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-3 border border-gray-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                            >
                                <div className="text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">{item.title}</h4>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex justify-center mb-12 border-b border-gray-800">
                    <button 
                        className={`px-6 sm:px-8 py-3 text-lg font-medium transition-all duration-300 ${activeTab === 'features' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('features')}
                    >
                        Detailed Features
                    </button>
                    <button 
                        className={`px-6 sm:px-8 py-3 text-lg font-medium transition-all duration-300 ${activeTab === 'industries' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('industries')}
                    >
                        Industries Served
                    </button>
                </div>
                
                {/* Tab Content */}
                {activeTab === 'features' && (
                    <div className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {EXTENDED_FEATURES.map((feature, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-1 border border-gray-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                                >
                                    <div className="text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">{feature.title}</h4>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeTab === 'industries' && (
                    <div className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {INDUSTRIES.map((industry, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-[1.02] border border-gray-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                                >
                                    <h4 className="text-xl font-bold mb-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">{industry.name}</h4>
                                    <p className="text-gray-300">{industry.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <a 
                                href="/Industries" 
                                className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105"
                            >
                                Click to see All Industries &rarr;
                            </a>
                        </div>
                    </div>
                )}
{/* <div className="text-center pt-8">
                    <a href="/signup" className="group relative px-10 py-3 sm:px-12 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-base overflow-hidden text-white transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 inline-block w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                        Get Started Today &rarr;
                    </a>
                </div> */}

            </div>
        </section>
    );
};

// --- Child Component: FielduoVsCompetitorsSection ---
const FielduoVsCompetitorsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const comparisonData = [
        {
            category: 'pricing',
            differentiator: 'Pricing',
            fielduo: 'Best-in-class value, no core gaps',
            competitors: '$0 to $119/month, features may restrict',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'scheduling',
            differentiator: 'Scheduling',
            fielduo: 'AI-powered and easy to deploy',
            competitors: 'Robust but complex',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'mobile',
            differentiator: 'Mobile + Offline',
            fielduo: 'Full features, easy setup',
            competitors: 'Advanced offline use may be limited',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'portal',
            differentiator: 'Customer Portal',
            fielduo: 'Fully integrated and seamless',
            competitors: 'Often requires add-ons',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'support',
            differentiator: 'Customer Support',
            fielduo: '24/7 dedicated support with quick response times',
            competitors: 'Limited hours or premium support tiers',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'onboarding',
            differentiator: 'Onboarding',
            fielduo: 'Personalized setup and training included',
            competitors: 'Self-service or additional fees for onboarding',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Categories' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'scheduling', label: 'Scheduling' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'portal', label: 'Portal' },
        { id: 'support', label: 'Support' },
        { id: 'onboarding', label: 'Onboarding' }
    ];

    const filteredData = activeCategory === 'all' 
        ? comparisonData 
        : comparisonData.filter(item => item.category === activeCategory);

    return (
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Fielduo vs Competitors
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        See how Fielduo stands out from the competition with superior features and value
                    </p>
                </div>
                
                {/* Category Filter - Mobile */}
                <div className="lg:hidden mb-8" data-aos="fade-up" data-aos-delay="100">
                    <select 
                        className="w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm border border-gray-800 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Category Filter - Desktop */}
                <div className="hidden lg:flex justify-center mb-12 flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category.id 
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                                    : 'bg-gray-900 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-800'
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                            data-aos="zoom-in"
                            data-aos-delay={150 + index * 50}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                
                {/* Comparison Table */}
                <div 
                    className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 p-5 border-b border-gray-700">
                        <div className="font-bold text-lg text-gray-300">Differentiator</div>
                        <div className="font-bold text-lg text-blue-400 flex items-center">
                            <span className="mr-2">🚀</span> Fielduo Advantage
                        </div>
                        <div className="font-bold text-lg text-gray-400 flex items-center">
                            <span className="mr-2">🏢</span> Competitors
                        </div>
                    </div>
                    
                    {/* Table Body */}
                    {filteredData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`grid grid-cols-1 md:grid-cols-3 p-5 transition-all duration-300 hover:bg-gray-850 ${
                                index % 2 === 0 ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-900 bg-opacity-30'
                            }`}
                            data-aos="fade-up"
                            data-aos-delay={250 + index * 50}
                        >
                            {/* Differentiator */}
                            <div className="flex items-start mb-4 md:mb-0">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-1.5 h-14 mr-4 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{item.differentiator}</h3>
                                </div>
                            </div>
                            {/* Fielduo Advantage */}
                            <div className="flex items-start mb-4 md:mb-0 group">
                                <span className="text-green-400 mr-3 text-xl mt-1 group-hover:scale-110 transition-transform">{item.fielduoIcon}</span>
                                <div>
                                    <h4 className="font-semibold text-blue-300">Fielduo Advantage</h4>
                                    <p className="text-gray-300">{item.fielduo}</p>
                                </div>
                            </div>
                            {/* Competitors */}
                            <div className="flex items-start group">
                                <span className="text-yellow-400 mr-3 text-xl mt-1 group-hover:scale-110 transition-transform">{item.competitorIcon}</span>
                                <div>
                                    <h4 className="font-semibold text-gray-400">Competitors</h4>
                                    <p className="text-gray-400">{item.competitors}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Key Takeaways */}
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl" data-aos="fade-up" data-aos-delay="300" >
                    <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Fielduo?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-right" data-aos-delay="350">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Unbeatable Value</h4>
                                <p className="text-gray-300">Get the best features without paying a premium price</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="400">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.75l.5-1.5h4l.5 1.5H16l-1-3h-1.5l1-3h-1.5l-1 3H10.5l-1 3H8l1.5-4.5h3l1.5 4.5H16z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Seamless Mobile Experience</h4>
                                <p className="text-gray-300">Reliable offline functionality that just works</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Child Component: AboutFielduoSection ---
const AboutFielduoSection = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
            </div>
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
                        <span className="text-indigo-300 font-medium text-xs sm:text-sm">ABOUT US</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"> About Fielduo </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto"> Revolutionizing field service management with innovative technology </p>
                </div>

                {/* Who We Are Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-8">
                        <div data-aos="fade-right">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full">WHO WE ARE</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                A Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Driven by Efficiency</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We are Fielduo—a team of field service veterans and software engineers dedicated to eliminating operational chaos. We know that every minute a technician spends on paperwork or driving inefficient routes directly impacts your bottom line.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                Our platform is built on a simple philosophy: **Automation should be invisible, and data should be immediate.** We provide the tools for your team to focus on the work, not the workflow.
                            </p>
                        </div>
                        {/* <div className="mt-8" data-aos="fade-right" data-aos-delay="200">
                            <button className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-base overflow-hidden text-white transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 inline-block focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                                <span className="relative z-10 flex items-center">
                                    Our Manifesto
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div> */}
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                        <div className="relative bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 h-full">
                            <div className="flex items-center mb-6">
                                <div className="h-0.5 w-10 bg-indigo-500 mr-4"></div>
                                <h3 className="text-2xl font-bold text-indigo-400">Our Story</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Hari and Kiruthiga launched Fielduo after witnessing firsthand the struggles of manual reporting, fragmented schedules, and delayed data in field teams. Driven by a shared vision of effortless digital workflows, they developed a mobile-first prototype that quickly gained traction among local service providers.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Today, we continue to iterate and grow, guided by customer feedback and a commitment to simplicity.
                            </p>
                            <div className="flex items-center mt-8 pt-6 border-t border-gray-800">
                                <div className="flex -space-x-3 mr-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold">H</div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">K</div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Founded by</p>
                                    <p className="font-medium">Hari & Kiruthiga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What Sets Us Apart Section */}
                <div className="py-16 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-3xl mb-20">
                    <div className="text-center mb-16 px-4">
                        <div className="inline-block mb-4" data-aos="fade-down">
                            <span className="text-xs font-semibold px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full">OUR DIFFERENCE</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            The Fielduo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Advantage</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Focus on what truly moves the needle for field service businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {/* Feature 1 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in">
                            <div className="text-4xl mb-6">🧠</div>
                            <h3 className="text-2xl font-bold mb-4">AI-Driven Scheduling</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our proprietary AI engine automatically optimizes schedules and routes in real-time, cutting down planning time from hours to seconds and maximizing job completion rates.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="100">
                            <div className="text-4xl mb-6">📱</div>
                            <h3 className="text-2xl font-bold mb-4">Offline-First Mobile</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Give your field team a mobile app that works 100% reliably even in remote locations. Everything syncs instantly once connectivity is restored.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="200">
                            <div className="text-4xl mb-6">👥</div>
                            <h3 className="text-2xl font-bold mb-4">Built for Collaboration</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Seamless communication between the office, field technicians, and customers ensures everyone is aligned, reducing status calls and increasing customer satisfaction.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="300">
                            <div className="text-4xl mb-6">🔗</div>
                            <h3 className="text-2xl font-bold mb-4">Easy Integration</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our lightweight API and pre-built connectors to popular ERP and CRM platforms mean rapid deployment with minimal IT overhead.
                            </p>
                        </div>
                        {/* Feature 5 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="400">
                            <div className="text-4xl mb-6">🔐</div>
                            <h3 className="text-2xl font-bold mb-4">Scalable & Secure</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Built on a modern cloud-native stack, Fielduo scales with your team. Role-based access controls and ISO-aligned security practices protect your data from end to end.
                            </p>
                        </div>
                        {/* Feature 6 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20 md:col-span-2 lg:col-span-1 lg:mx-auto" data-aos="zoom-in" data-aos-delay="500">
                            <div className="text-4xl mb-6">🤝</div>
                            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                We work hand in hand with every client. From personalized onboarding sessions to ongoing check-ins, our dedicated customer success team ensures you get the most value from Fielduo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Section */}
                <div className="py-16 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-3xl mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
                        {/* Vision */}
                        <div className="group bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="fade-right">
                            <div className="flex items-center mb-6">
                                <div className="h-0.5 w-10 bg-purple-500 mr-4"></div>
                                <h3 className="text-2xl font-bold text-purple-400">Our Vision</h3>
                            </div>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                To be the world's most intuitive and intelligent platform for field service management, powering millions of successful service calls every day.
                            </p>
                            <div className="flex items-center justify-center mt-8 p-4 bg-gray-900/50 rounded-xl">
                                <span className="text-indigo-400 font-medium">#FutureOfFieldService</span>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="group bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="fade-left">
                            <div className="flex items-center mb-6">
                                <div className="h-0.5 w-10 bg-indigo-500 mr-4"></div>
                                <h3 className="text-2xl font-bold text-indigo-400">Our Mission</h3>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Simplify complex field operations through powerful, accessible mobile and AI technology</span>
                                </li>
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Enable effortless data flow and integration with existing business systems through open APIs and pre-built connectors</span>
                                </li>
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Provide unrivalled customer support and continuous innovation to help our clients adapt and excel</span>
                                </li>
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Uphold the highest standards of security, reliability, and privacy in all our solutions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* The "Our Team Section" block has been removed here */}

            </div>
        </section>
    );
};

// --- Child Component: ContactUsSection ---
const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(null);

    const contactDetails = [
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ), 
            title: "Production Office", 
            lines: ["2261 Market Street STE 86773", "San Francisco, CA 94114"] 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ), 
            title: "Email Us", 
            lines: ["sales@fielduo.com"] 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z" />
                </svg>
            ), 
            title: "Call Us", 
            lines: ["+1 (888) 555-1212"] 
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        // This is where a real form submission would happen (e.g., fetch request to an API)
        console.log("Form Submitted:", formData);

        // Simulate API response
        if (formData.fullName && formData.email && formData.message) {
            setSubmitted({
                ok: true,
                message: "Thank you for reaching out! We've received your message and will be in touch shortly."
            });
            // Clear form
            setFormData({ fullName: '', email: '', company: '', message: '' });
        } else {
            setSubmitted({
                ok: false,
                message: "Please fill in all required fields (Name, Email, Message) before submitting."
            });
        }

        // Clear status message after a few seconds
        setTimeout(() => setSubmitted(null), 5000);
    };

    return (
        <>
        <section id='Contact' className="py-20 md:py-32 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
                        <span className="text-indigo-300 font-medium text-xs sm:text-sm">GET IN TOUCH</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Start Your Next Project
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Whether you have a question or need a personalized demo, our team is ready to help.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information Cards */}
                    <div className="space-y-6" data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-white mb-6">Reach Out Directly</h3>
                        {contactDetails.map((item, index) => (
                            <div key={index} className="flex items-start p-6 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20" >
                                <div className="p-3 mr-4 bg-indigo-900/50 rounded-full flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                                    {item.lines.map((line, lineIndex) => (
                                        <p key={lineIndex} className="text-gray-300 text-sm">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-gray-800 shadow-2xl" data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                        {submitted && (
                            <div className={`p-4 mb-4 rounded-lg text-sm font-medium ${submitted.ok ? 'bg-green-600/30 text-green-300 border border-green-500' : 'bg-red-600/30 text-red-300 border border-red-500'}`}>
                                {submitted.message}
                            </div>
                        )}
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    id="full-name" 
                                    name="fullName" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="Jane Doe" 
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="jane.doe@company.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional)</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="Field Service Co." 
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">How can we help?</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="I'd like a demo of the AI scheduling feature..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-950 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-100 mb-6" data-aos="fade-up">Our Location</h2>
                <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                    {/* Replaced the original map link with a standard Google Maps embed for the Production Office address */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292991054924!2d-122.42777328468162!3d37.7770851797585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858097b69a2d21%3A0x1d3a52c1e4c7e6c9!2s2261%20Market%20St%20%2386773%2C%20San%20Francisco%2C%20CA%2094114%2C%20USA!5e0!3m2!1sen!2sin!4v1633596000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location Map" ></iframe>
                </div>
            </div>
        </section>
        </>
    );
};

// --- Main Component ---
export default function HomeContent() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [orbs, setOrbs] = useState([]);

    useEffect(() => {
        // Function to update date and generate orbs on mount
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        setCurrentDate(formattedDate);
        
        setOrbs(generateOrbs());

        // Mouse movement for the effect
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Create a ripple effect on the CTA button
    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    };
    
    // Calculate a slight movement for the orbs based on mouse position
    const calculateOrbMovement = (orb, index) => {
        if (typeof window === 'undefined') return {}; // Avoid errors during server-side render

        const movementFactor = 0.05 + (index % 3) * 0.02; // Varying movement speed
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (mousePosition.x - centerX) * movementFactor;
        const deltaY = (mousePosition.y - centerY) * movementFactor;
        
        return {
            transform: `translate(${deltaX}px, ${deltaY}px)`
        };
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
            {/* Custom CSS for orbs and animations */}
            <style jsx global>{`
                /* Keyframes for the orbs */
                @keyframes pulse1 {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.15; }
                    50% { transform: scale(1.1) translate(10px, -10px); opacity: 0.25; }
                }
                @keyframes pulse2 {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.2; }
                    50% { transform: scale(0.9) translate(-5px, 15px); opacity: 0.3; }
                }
                @keyframes pulse3 {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.1; }
                    50% { transform: scale(1.2) translate(-15px, -5px); opacity: 0.2; }
                }
                /* Gradient animation for text */
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient-shift 5s ease-in-out infinite;
                }
                /* Ripple effect for CTA */
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    width: 100px;
                    height: 100px;
                    margin-top: -50px;
                    margin-left: -50px;
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                }
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                /* Custom animation for feature icon pulse */
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                /* Custom animation for visualizer fade in */
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
                
                /* Fast fade-in animation for team transitions */
                @keyframes fade-in-fast {
                    from { 
                        opacity: 0; 
                        transform: translateY(10px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                .animate-fade-in {
                    animation: fade-in-fast 0.3s ease-out forwards;
                }
            `}</style>
            
            {/* --- Decorative Orbs (Parallax Effect) --- */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-transform duration-500">
                {orbs.map((orb, i) => (
                    <div 
                        key={i} 
                        className="absolute rounded-full filter blur-3xl opacity-20 transition-transform duration-300 ease-out"
                        style={{ ...orb, ...calculateOrbMovement(orb, i), backgroundColor: i % 2 === 0 ? '#6366f1' : '#8b5cf6', background: `radial-gradient(circle at center, ${i % 2 === 0 ? '#6366f1' : '#8b5cf6'}, ${i % 2 === 0 ? '#3b82f6' : '#ec4899'})`, animation: orb.animation, animationDelay: orb.delay }} 
                    ></div>
                ))}
            </div>

            {/* --- Main Content Container --- */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-32 md:pb-12">
                <HeroSection currentDate={currentDate} isHovering={isHovering} setIsHovering={setIsHovering} createRipple={createRipple} />
                <FeaturesSection />
                <WhyChooseFielduoSection />
                <section id='Pricing'><Pricing /></section>
                <FielduoVsCompetitorsSection />
                <section id='About'><AboutFielduoSection /></section>
                <ContactUsSection />
            </main>
        </div>
    );
}'use client';
import Pricing from './Pricing';
import { useState, useEffect } from 'react';

// --- Data Definitions (Shared Constants) ---
// This data is kept at the top level for clarity and can be easily moved or managed.

const FEATURES_DATA = [
    {
        title: "Smart Scheduling",
        description: "Intelligent scheduling that automatically optimizes routes and assigns the best technician for the job.",
        icon: "📅",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Real-Time Tracking",
        description: "Live GPS tracking of your team with automated customer notifications.",
        icon: "📍",
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "Digital Invoicing",
        description: "Generate professional invoices and get paid faster with integrated payment options.",
        icon: "📄",
        color: "from-green-500 to-emerald-400"
    },
    {
        title: "Customer Portal",
        description: "A self-service portal for clients to book services and track job progress.",
        icon: "👥",
        color: "from-orange-500 to-amber-400"
    }
];

const KEY_VALUE_PROPOSITIONS = [ // KEPT: Used within WhyChooseFielduoSection
    {
        title: "Streamline Operations",
        description: "Automated scheduling, dispatching, and work order management.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        title: "Boost Productivity",
        description: "Mobile-first workflows with full offline support for field teams.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Enhance Customer Experience",
        description: "24/7 customer portal with real-time updates and transparency.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Increase Revenue",
        description: "Smart pricing tools, upsell workflows, and retention boosters.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const EXTENDED_FEATURES = [ // KEPT: Used within WhyChooseFielduoSection
    {
        title: "AI-Powered Scheduling",
        description: "Auto-assign jobs based on skills, location, and availability—minimizing admin and maximizing field efficiency.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Mobile App (Offline-First)",
        description: "Works seamlessly with or without WiFi/data. No connectivity? No problem—fieldwork continues and syncs automatically.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Real-Time Analytics",
        description: "Instant dashboards and reporting for all your jobs, revenue, and technician KPIs in a single view.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        title: "IoT & AI Integration",
        description: "Integrate smart devices, sensors, and leverage AI automation with zero hassle—future-proof your operations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: "Secure Cloud Platform",
        description: "Reliable, scalable, and accessible worldwide. Rock-solid infrastructure with encryption and compliance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    }
];

const INDUSTRIES = [
    { name: "HVAC", description: "Heating, Ventilation, and Air Conditioning" },
    { name: "Plumbing", description: "Expert plumbing solutions" },
    { name: "Electrical", description: "Professional electrical services" },
    { name: "Appliance Repair", description: "Reliable appliance fixes" },
    { name: "Facility Management", description: "Comprehensive facility services" },
    { name: "Pest Control", description: "Effective pest solutions" }
];

// --- Helper Function (Orbs) ---
const generateOrbs = (count = 6) => {
    return [...Array(count)].map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 500 + 300}px`,
        height: `${Math.random() * 500 + 300}px`,
        animation: `pulse${Math.floor(Math.random() * 3) + 1} ${Math.random() * 20 + 15}s infinite ease-in-out`,
        delay: `${Math.random() * 5}s`,
    }));
};

// --- Child Component: HeroSection ---
const HeroSection = ({ currentDate, isHovering, setIsHovering, createRipple }) => (
    <section className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-down">
        {/* Tagline */}
        <div className="inline-block mb-4 md:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30 shadow-lg" data-aos="zoom-in" data-aos-delay="200">
            <span className="text-indigo-300 font-medium flex items-center justify-center gap-2 text-xs sm:text-sm">
                <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                The Future of Field Service Management
            </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-2 md:mb-3 leading-tight px-2" data-aos="fade-up" data-aos-delay="300">
            <span className="block mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                AI-Powered Field Operations
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                That Actually Work
            </span>
        </h1>
        
        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-6 md:mb-8 px-4" data-aos="fade-up" data-aos-delay="400">
            An all-in-one platform for scheduling, dispatching, invoicing, and customer management, built for maximum efficiency.
        </p>
        
        {/* CTA Buttons - Refactored for semantic correctness */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 md:mb-8 px-4" data-aos="fade-up" data-aos-delay="500">
            <a 
                href="#Contact"
                role="button"
                className="group relative px-8 py-3 sm:px-10 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-base overflow-hidden text-white transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-indigo-500/50 inline-block"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={createRipple}
            >
                <span className="relative z-10">Start Your Free Trial</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
            </a>
            <a 
                href="#Pricing" 
                className="group relative px-8 py-3 sm:px-10 sm:py-3 border border-gray-600 bg-gray-800/50 rounded-xl font-bold text-base text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700/50 hover:border-indigo-500 w-full sm:w-auto flex items-center justify-center"
            >
                <span className="relative z-10">View Pricing &rarr;</span>
            </a>
        </div>
        
        {/* Trust Indicators & Date */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 text-gray-400 text-xs sm:text-sm px-4" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>15-Day Free Trial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Cancel anytime</span>
            </div>
        </div>
        
        {/* Current Date Display */}
        <div className="mt-3 text-center" data-aos="fade-up" data-aos-delay="700">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700/50">
                <span className="text-indigo-300 text-sm">📅</span>
                <span className="text-gray-300 text-xs font-medium">{currentDate}</span>
            </div>
        </div>
    </section>
);

// --- Child Component: FeaturesSection ---
const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="mb-16 md:mb-24 relative pt-6" data-aos="fade-up">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-10 px-4">
                <div className="inline-block mb-2 md:mb-3 px-3 py-1 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
                    <span className="text-indigo-300 font-medium text-xs sm:text-sm">POWERFUL FEATURES</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2 md:mb-3"> 
                    Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Succeed</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                    Our comprehensive platform provides all the tools necessary to streamline your field service operations and boost profitability.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Feature List (Left Column) */}
                <div data-aos="fade-right">
                    <div className="space-y-3 px-2"> 
                        {FEATURES_DATA.map((feature, index) => (
                            <div
                                key={index}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActiveFeature(index)}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveFeature(index)}
                                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border-l-4 border-indigo-500 shadow-xl'
                                        : 'bg-gray-800/40 hover:bg-gray-700/40 border-l-4 border-transparent'
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={100 * index}
                            >
                                {activeFeature === index && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"></div>
                                )}
                                <div className="flex items-start gap-3 relative z-10">
                                    <div className={`text-xl md:text-2xl p-2 rounded-lg shadow-lg flex items-center justify-center border border-transparent ${
                                        activeFeature === index 
                                            ? `bg-gradient-to-br ${feature.color} border-white/20 animate-pulse-slow` 
                                            : 'bg-gray-700/50'
                                    }`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-0.5">{feature.title}</h3> 
                                        <p className="text-gray-300 text-sm">{feature.description}</p> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Feature Visualization (Right Column) */}
                <div className="relative h-60 md:h-72 lg:h-80 flex items-center justify-center mt-6 lg:mt-0 px-4" data-aos="fade-left" data-aos-delay="300">
                    <div className="absolute inset-4 sm:inset-6 bg-gray-900/80 border-4 border-indigo-500/50 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-black/50 absolute z-0 backdrop-blur-sm"></div>
                        <div className="relative z-10 text-center p-3">
                            <div className="text-5xl md:text-7xl lg:text-8xl mb-3 text-white animate-fade-in">{FEATURES_DATA[activeFeature].icon}</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                                {FEATURES_DATA[activeFeature].title}
                            </h3>
                            <p className="text-gray-300 max-w-xs mx-auto text-sm">{FEATURES_DATA[activeFeature].description}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center pb-3">
                        <div className="flex space-x-2">
                            {FEATURES_DATA.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveFeature(idx)}
                                    aria-label={`Show feature ${idx + 1}: ${FEATURES_DATA[idx].title}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === activeFeature  
                                            ? 'bg-indigo-500 w-4'  
                                            : 'bg-gray-600 w-2 hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Child Component: WhyChooseFielduoSection ---
const WhyChooseFielduoSection = () => {
    const [activeTab, setActiveTab] = useState('features');

    return (
        <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Why Choose Fielduo
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover the features that make Fielduo the perfect solution for your business needs
                    </p>
                </div>
                
                {/* Key Value Propositions */}
                <div className="mb-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-200">Key Value Propositions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {KEY_VALUE_PROPOSITIONS.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-3 border border-gray-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                            >
                                <div className="text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">{item.title}</h4>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex justify-center mb-12 border-b border-gray-800">
                    <button 
                        className={`px-6 sm:px-8 py-3 text-lg font-medium transition-all duration-300 ${activeTab === 'features' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('features')}
                    >
                        Detailed Features
                    </button>
                    <button 
                        className={`px-6 sm:px-8 py-3 text-lg font-medium transition-all duration-300 ${activeTab === 'industries' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('industries')}
                    >
                        Industries Served
                    </button>
                </div>
                
                {/* Tab Content */}
                {activeTab === 'features' && (
                    <div className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {EXTENDED_FEATURES.map((feature, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:-translate-y-1 border border-gray-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                                >
                                    <div className="text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">{feature.title}</h4>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeTab === 'industries' && (
                    <div className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {INDUSTRIES.map((industry, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-[1.02] border border-gray-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 group"
                                >
                                    <h4 className="text-xl font-bold mb-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">{industry.name}</h4>
                                    <p className="text-gray-300">{industry.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <a 
                                href="/Industries" 
                                className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105"
                            >
                                Click to see All Industries &rarr;
                            </a>
                        </div>
                    </div>
                )}
{/* <div className="text-center pt-8">
                    <a href="/signup" className="group relative px-10 py-3 sm:px-12 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-base overflow-hidden text-white transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 inline-block w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                        Get Started Today &rarr;
                    </a>
                </div> */}

            </div>
        </section>
    );
};

// --- Child Component: FielduoVsCompetitorsSection ---
const FielduoVsCompetitorsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const comparisonData = [
        {
            category: 'pricing',
            differentiator: 'Pricing',
            fielduo: 'Best-in-class value, no core gaps',
            competitors: '$0 to $119/month, features may restrict',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'scheduling',
            differentiator: 'Scheduling',
            fielduo: 'AI-powered and easy to deploy',
            competitors: 'Robust but complex',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'mobile',
            differentiator: 'Mobile + Offline',
            fielduo: 'Full features, easy setup',
            competitors: 'Advanced offline use may be limited',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'portal',
            differentiator: 'Customer Portal',
            fielduo: 'Fully integrated and seamless',
            competitors: 'Often requires add-ons',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'support',
            differentiator: 'Customer Support',
            fielduo: '24/7 dedicated support with quick response times',
            competitors: 'Limited hours or premium support tiers',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        },
        {
            category: 'onboarding',
            differentiator: 'Onboarding',
            fielduo: 'Personalized setup and training included',
            competitors: 'Self-service or additional fees for onboarding',
            fielduoIcon: '✅',
            competitorIcon: '⚠️'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Categories' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'scheduling', label: 'Scheduling' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'portal', label: 'Portal' },
        { id: 'support', label: 'Support' },
        { id: 'onboarding', label: 'Onboarding' }
    ];

    const filteredData = activeCategory === 'all' 
        ? comparisonData 
        : comparisonData.filter(item => item.category === activeCategory);

    return (
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Fielduo vs Competitors
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        See how Fielduo stands out from the competition with superior features and value
                    </p>
                </div>
                
                {/* Category Filter - Mobile */}
                <div className="lg:hidden mb-8" data-aos="fade-up" data-aos-delay="100">
                    <select 
                        className="w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm border border-gray-800 text-white rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Category Filter - Desktop */}
                <div className="hidden lg:flex justify-center mb-12 flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category.id 
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                                    : 'bg-gray-900 bg-opacity-70 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-800'
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                            data-aos="zoom-in"
                            data-aos-delay={150 + index * 50}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                
                {/* Comparison Table */}
                <div 
                    className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 p-5 border-b border-gray-700">
                        <div className="font-bold text-lg text-gray-300">Differentiator</div>
                        <div className="font-bold text-lg text-blue-400 flex items-center">
                            <span className="mr-2">🚀</span> Fielduo Advantage
                        </div>
                        <div className="font-bold text-lg text-gray-400 flex items-center">
                            <span className="mr-2">🏢</span> Competitors
                        </div>
                    </div>
                    
                    {/* Table Body */}
                    {filteredData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`grid grid-cols-1 md:grid-cols-3 p-5 transition-all duration-300 hover:bg-gray-850 ${
                                index % 2 === 0 ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-900 bg-opacity-30'
                            }`}
                            data-aos="fade-up"
                            data-aos-delay={250 + index * 50}
                        >
                            {/* Differentiator */}
                            <div className="flex items-start mb-4 md:mb-0">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-1.5 h-14 mr-4 rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{item.differentiator}</h3>
                                </div>
                            </div>
                            {/* Fielduo Advantage */}
                            <div className="flex items-start mb-4 md:mb-0 group">
                                <span className="text-green-400 mr-3 text-xl mt-1 group-hover:scale-110 transition-transform">{item.fielduoIcon}</span>
                                <div>
                                    <h4 className="font-semibold text-blue-300">Fielduo Advantage</h4>
                                    <p className="text-gray-300">{item.fielduo}</p>
                                </div>
                            </div>
                            {/* Competitors */}
                            <div className="flex items-start group">
                                <span className="text-yellow-400 mr-3 text-xl mt-1 group-hover:scale-110 transition-transform">{item.competitorIcon}</span>
                                <div>
                                    <h4 className="font-semibold text-gray-400">Competitors</h4>
                                    <p className="text-gray-400">{item.competitors}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Key Takeaways */}
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl" data-aos="fade-up" data-aos-delay="300" >
                    <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Fielduo?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-right" data-aos-delay="350">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Unbeatable Value</h4>
                                <p className="text-gray-300">Get the best features without paying a premium price</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-gray-900 bg-opacity-50 rounded-xl hover:bg-gray-800 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="400">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.75l.5-1.5h4l.5 1.5H16l-1-3h-1.5l1-3h-1.5l-1 3H10.5l-1 3H8l1.5-4.5h3l1.5 4.5H16z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Seamless Mobile Experience</h4>
                                <p className="text-gray-300">Reliable offline functionality that just works</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Child Component: AboutFielduoSection ---
const AboutFielduoSection = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
            </div>
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
                        <span className="text-indigo-300 font-medium text-xs sm:text-sm">ABOUT US</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"> About Fielduo </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto"> Revolutionizing field service management with innovative technology </p>
                </div>

                {/* Who We Are Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-8">
                        <div data-aos="fade-right">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full">WHO WE ARE</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                A Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Driven by Efficiency</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We are Fielduo—a team of field service veterans and software engineers dedicated to eliminating operational chaos. We know that every minute a technician spends on paperwork or driving inefficient routes directly impacts your bottom line.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                Our platform is built on a simple philosophy: **Automation should be invisible, and data should be immediate.** We provide the tools for your team to focus on the work, not the workflow.
                            </p>
                        </div>
                        {/* <div className="mt-8" data-aos="fade-right" data-aos-delay="200">
                            <button className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-base overflow-hidden text-white transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 inline-block focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                                <span className="relative z-10 flex items-center">
                                    Our Manifesto
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div> */}
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                        <div className="relative bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 h-full">
                            <div className="flex items-center mb-6">
                                <div className="h-0.5 w-10 bg-indigo-500 mr-4"></div>
                                <h3 className="text-2xl font-bold text-indigo-400">Our Story</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Hari and Kiruthiga launched Fielduo after witnessing firsthand the struggles of manual reporting, fragmented schedules, and delayed data in field teams. Driven by a shared vision of effortless digital workflows, they developed a mobile-first prototype that quickly gained traction among local service providers.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Today, we continue to iterate and grow, guided by customer feedback and a commitment to simplicity.
                            </p>
                            <div className="flex items-center mt-8 pt-6 border-t border-gray-800">
                                <div className="flex -space-x-3 mr-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold">H</div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">K</div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Founded by</p>
                                    <p className="font-medium">Hari & Kiruthiga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What Sets Us Apart Section */}
                <div className="py-16 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-3xl mb-20">
                    <div className="text-center mb-16 px-4">
                        <div className="inline-block mb-4" data-aos="fade-down">
                            <span className="text-xs font-semibold px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full">OUR DIFFERENCE</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            The Fielduo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Advantage</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Focus on what truly moves the needle for field service businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {/* Feature 1 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in">
                            <div className="text-4xl mb-6">🧠</div>
                            <h3 className="text-2xl font-bold mb-4">AI-Driven Scheduling</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our proprietary AI engine automatically optimizes schedules and routes in real-time, cutting down planning time from hours to seconds and maximizing job completion rates.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="100">
                            <div className="text-4xl mb-6">📱</div>
                            <h3 className="text-2xl font-bold mb-4">Offline-First Mobile</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Give your field team a mobile app that works 100% reliably even in remote locations. Everything syncs instantly once connectivity is restored.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="200">
                            <div className="text-4xl mb-6">👥</div>
                            <h3 className="text-2xl font-bold mb-4">Built for Collaboration</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Seamless communication between the office, field technicians, and customers ensures everyone is aligned, reducing status calls and increasing customer satisfaction.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="300">
                            <div className="text-4xl mb-6">🔗</div>
                            <h3 className="text-2xl font-bold mb-4">Easy Integration</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our lightweight API and pre-built connectors to popular ERP and CRM platforms mean rapid deployment with minimal IT overhead.
                            </p>
                        </div>
                        {/* Feature 5 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="zoom-in" data-aos-delay="400">
                            <div className="text-4xl mb-6">🔐</div>
                            <h3 className="text-2xl font-bold mb-4">Scalable & Secure</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Built on a modern cloud-native stack, Fielduo scales with your team. Role-based access controls and ISO-aligned security practices protect your data from end to end.
                            </p>
                        </div>
                        {/* Feature 6 */}
                        <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20 md:col-span-2 lg:col-span-1 lg:mx-auto" data-aos="zoom-in" data-aos-delay="500">
                            <div className="text-4xl mb-6">🤝</div>
                            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                We work hand in hand with every client. From personalized onboarding sessions to ongoing check-ins, our dedicated customer success team ensures you get the most value from Fielduo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Section */}
                <div className="py-16 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-3xl mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
                        {/* Vision */}
                        <div className="group bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="fade-right">
                            <div className="flex items-center mb-6">
                                <div className="h-0.5 w-10 bg-purple-500 mr-4"></div>
                                <h3 className="text-2xl font-bold text-purple-400">Our Vision</h3>
                            </div>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                To be the world's most intuitive and intelligent platform for field service management, powering millions of successful service calls every day.
                            </p>
                            <div className="flex items-center justify-center mt-8 p-4 bg-gray-900/50 rounded-xl">
                                <span className="text-indigo-400 font-medium">#FutureOfFieldService</span>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="group bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-10 border border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/20" data-aos="fade-left">
                            <div className="flex items-center mb-6">
                                <div className="h-0.5 w-10 bg-indigo-500 mr-4"></div>
                                <h3 className="text-2xl font-bold text-indigo-400">Our Mission</h3>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Simplify complex field operations through powerful, accessible mobile and AI technology</span>
                                </li>
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Enable effortless data flow and integration with existing business systems through open APIs and pre-built connectors</span>
                                </li>
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Provide unrivalled customer support and continuous innovation to help our clients adapt and excel</span>
                                </li>
                                <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                                    <span className="text-indigo-400 mr-3 text-xl">•</span>
                                    <span>Uphold the highest standards of security, reliability, and privacy in all our solutions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* The "Our Team Section" block has been removed here */}

            </div>
        </section>
    );
};

// --- Child Component: ContactUsSection ---
const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(null);

    const contactDetails = [
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ), 
            title: "Production Office", 
            lines: ["2261 Market Street STE 86773", "San Francisco, CA 94114"] 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ), 
            title: "Email Us", 
            lines: ["sales@fielduo.com"] 
        },
        { 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z" />
                </svg>
            ), 
            title: "Call Us", 
            lines: ["+1 (888) 555-1212"] 
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        // This is where a real form submission would happen (e.g., fetch request to an API)
        console.log("Form Submitted:", formData);

        // Simulate API response
        if (formData.fullName && formData.email && formData.message) {
            setSubmitted({
                ok: true,
                message: "Thank you for reaching out! We've received your message and will be in touch shortly."
            });
            // Clear form
            setFormData({ fullName: '', email: '', company: '', message: '' });
        } else {
            setSubmitted({
                ok: false,
                message: "Please fill in all required fields (Name, Email, Message) before submitting."
            });
        }

        // Clear status message after a few seconds
        setTimeout(() => setSubmitted(null), 5000);
    };

    return (
        <>
        <section id='Contact' className="py-20 md:py-32 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30">
                        <span className="text-indigo-300 font-medium text-xs sm:text-sm">GET IN TOUCH</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Start Your Next Project
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Whether you have a question or need a personalized demo, our team is ready to help.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information Cards */}
                    <div className="space-y-6" data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-white mb-6">Reach Out Directly</h3>
                        {contactDetails.map((item, index) => (
                            <div key={index} className="flex items-start p-6 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20" >
                                <div className="p-3 mr-4 bg-indigo-900/50 rounded-full flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                                    {item.lines.map((line, lineIndex) => (
                                        <p key={lineIndex} className="text-gray-300 text-sm">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-gray-800 shadow-2xl" data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                        {submitted && (
                            <div className={`p-4 mb-4 rounded-lg text-sm font-medium ${submitted.ok ? 'bg-green-600/30 text-green-300 border border-green-500' : 'bg-red-600/30 text-red-300 border border-red-500'}`}>
                                {submitted.message}
                            </div>
                        )}
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    id="full-name" 
                                    name="fullName" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="Jane Doe" 
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="jane.doe@company.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional)</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="Field Service Co." 
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">How can we help?</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200" 
                                    placeholder="I'd like a demo of the AI scheduling feature..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-950 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-100 mb-6" data-aos="fade-up">Our Location</h2>
                <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl" data-aos="fade-up" data-aos-delay="100">
                    {/* Replaced the original map link with a standard Google Maps embed for the Production Office address */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292991054924!2d-122.42777328468162!3d37.7770851797585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858097b69a2d21%3A0x1d3a52c1e4c7e6c9!2s2261%20Market%20St%20%2386773%2C%20San%20Francisco%2C%20CA%2094114%2C%20USA!5e0!3m2!1sen!2sin!4v1633596000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location Map" ></iframe>
                </div>
            </div>
        </section>
        </>
    );
};

// --- Main Component ---
export default function HomeContent() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [orbs, setOrbs] = useState([]);

    useEffect(() => {
        // Function to update date and generate orbs on mount
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        setCurrentDate(formattedDate);
        
        setOrbs(generateOrbs());

        // Mouse movement for the effect
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Create a ripple effect on the CTA button
    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    };
    
    // Calculate a slight movement for the orbs based on mouse position
    const calculateOrbMovement = (orb, index) => {
        if (typeof window === 'undefined') return {}; // Avoid errors during server-side render

        const movementFactor = 0.05 + (index % 3) * 0.02; // Varying movement speed
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (mousePosition.x - centerX) * movementFactor;
        const deltaY = (mousePosition.y - centerY) * movementFactor;
        
        return {
            transform: `translate(${deltaX}px, ${deltaY}px)`
        };
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
            {/* Custom CSS for orbs and animations */}
            <style jsx global>{`
                /* Keyframes for the orbs */
                @keyframes pulse1 {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.15; }
                    50% { transform: scale(1.1) translate(10px, -10px); opacity: 0.25; }
                }
                @keyframes pulse2 {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.2; }
                    50% { transform: scale(0.9) translate(-5px, 15px); opacity: 0.3; }
                }
                @keyframes pulse3 {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.1; }
                    50% { transform: scale(1.2) translate(-15px, -5px); opacity: 0.2; }
                }
                /* Gradient animation for text */
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient-shift 5s ease-in-out infinite;
                }
                /* Ripple effect for CTA */
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    width: 100px;
                    height: 100px;
                    margin-top: -50px;
                    margin-left: -50px;
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                }
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                /* Custom animation for feature icon pulse */
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                /* Custom animation for visualizer fade in */
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
                
                /* Fast fade-in animation for team transitions */
                @keyframes fade-in-fast {
                    from { 
                        opacity: 0; 
                        transform: translateY(10px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                .animate-fade-in {
                    animation: fade-in-fast 0.3s ease-out forwards;
                }
            `}</style>
            
            {/* --- Decorative Orbs (Parallax Effect) --- */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-transform duration-500">
                {orbs.map((orb, i) => (
                    <div 
                        key={i} 
                        className="absolute rounded-full filter blur-3xl opacity-20 transition-transform duration-300 ease-out"
                        style={{ ...orb, ...calculateOrbMovement(orb, i), backgroundColor: i % 2 === 0 ? '#6366f1' : '#8b5cf6', background: `radial-gradient(circle at center, ${i % 2 === 0 ? '#6366f1' : '#8b5cf6'}, ${i % 2 === 0 ? '#3b82f6' : '#ec4899'})`, animation: orb.animation, animationDelay: orb.delay }} 
                    ></div>
                ))}
            </div>

            {/* --- Main Content Container --- */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-32 md:pb-12">
                <HeroSection currentDate={currentDate} isHovering={isHovering} setIsHovering={setIsHovering} createRipple={createRipple} />
                <FeaturesSection />
                <WhyChooseFielduoSection />
                <section id='Pricing'><Pricing /></section>
                <FielduoVsCompetitorsSection />
                <section id='About'><AboutFielduoSection /></section>
                <ContactUsSection />
            </main>
        </div>
    );
}

