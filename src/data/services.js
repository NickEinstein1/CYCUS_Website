import {
    Code, Server, BrainCircuit, BarChart3, Truck, Users,
    Activity, ShieldCheck, Settings
} from 'lucide-react';

export const servicesData = [
    {
        id: 'web-software-development',
        title: "Web & Software Development",
        shortDescription: "Building high-performance digital engines that drive growth and captivate users.",
        fullDescription: "In a digital-first world, your technology is your competitive advantage. We don't just write code; we engineer scalable, high-velocity digital experiences. From immersive web platforms to robust enterprise ecosystems, we build the software that powers your future.",
        features: [
            "Enterprise-Grade Architectures",
            "High-Conversion Web Platforms",
            "Cross-Platform Mobile Ecosystems",
            "Seamless API Integrations",
            "Next-Gen UI/UX Design"
        ],
        icon: Code
    },
    {
        id: 'it-solutions',
        title: "IT Infrastructure",
        shortDescription: "Designing resilient, future-proof foundations for your enterprise operations.",
        fullDescription: "Downtime is obsolete. We architect invincible IT infrastructures that scale effortlessly with your ambition. Whether upgrading legacy systems or building from the ground up, we ensure your operational backbone is secure, fast, and unshakeable.",
        features: [
            "Zero-Trust Cloud Architecture",
            "Infrastructure Modernization",
            "Enterprise Network Design",
            "Disaster Recovery Planning",
            "24/7 Operational Support"
        ],
        icon: Server
    },
    {
        id: 'ai-powered-solutions',
        title: "AI & Innovation",
        shortDescription: "Unlocking unprecedented efficiency through predictive intelligence and automation.",
        fullDescription: "Stop reacting and start predicting. We harness the raw power of Artificial Intelligence to automate complex workflows and uncover hidden opportunities. From predictive modeling to intelligent agents, we turn your data into your hardest-working employee.",
        features: [
            "Custom Machine Learning Models",
            "Intelligent Process Automation",
            "Computer Vision Systems",
            "Predictive Business Analytics",
            "NLP & Chatbot Interfaces"
        ],
        icon: BrainCircuit
    },
    {
        id: 'data-analytics',
        title: "Data Intelligence",
        shortDescription: "Turning raw noise into crystal-clear strategic foresight.",
        fullDescription: "Data without insight is just noise. We transform complex datasets into clear, visual narratives that drive instant decision-making. Gain a 360-degree view of your organization and spot trends before your competitors do.",
        features: [
            "Real-Time Executive Dashboards",
            "Big Data Processing Pipelines",
            "Visual Storytelling & Reporting",
            "Market Trend Forecasting",
            "Operational Efficiency Audits"
        ],
        icon: BarChart3
    },
    {
        id: 'logistics-services',
        title: "Smart Logistics",
        shortDescription: "Accelerating supply chains with precision, velocity, and real-time control.",
        fullDescription: "In logistics, visibility is everything. Our smart logistics solutions eliminate blind spots, optimizing every mile of your supply chain. Track assets in real-time, predict delays, and deliver with military precision.",
        features: [
            "AI-Optimized Route Planning",
            "Real-Time Fleet Telematics",
            "Automated Inventory Control",
            "End-to-End Supply Chain Visiblity",
            "Last-Mile Efficiency Tools"
        ],
        icon: Truck
    },
    {
        id: 'hr-services',
        title: "Workforce Optimization",
        shortDescription: "Empowering your most valuable asset—your people—with next-gen tools.",
        fullDescription: "Great teams need great tools. We streamline the entire employee lifecycle, from acquisition to retention. Our HR solutions remove friction from administration, allowing you to focus on culture, performance, and leadership.",
        features: [
            "Talent Acquisition Suites",
            "Automated Payroll Engines",
            "Performance Analytics",
            "Digital Onboarding Flows",
            "Employee Engagement Platforms"
        ],
        icon: Users
    },
    {
        id: 'medical-solutions',
        title: "HealthTech Solutions",
        shortDescription: "Revolutionizing patient care with secure, efficient, and life-saving technology.",
        fullDescription: "In healthcare, efficiency saves lives. We bridge the gap between medical expertise and digital innovation, creating systems that secure patient data, streamline hospital workflows, and extend care beyond the clinic walls.",
        features: [
            "Interoperable EHR Systems",
            "Secure Telehealth Platforms",
            "Clinical Workflow Automation",
            "HIPAA-Compliant Data Storage",
            "Patient Engagement Portals"
        ],
        icon: Activity
    },
    {
        id: 'cybersecurity-solutions',
        title: "Cyber Defense",
        shortDescription: "Fortifying your digital borders with military-grade security protocols.",
        fullDescription: "Trust is hard to earn and easy to lose. Our cybersecurity experts deploy proactive defense systems that identify threats before they strike. We don't just patch vulnerabilities; we build digital fortresses around your critical assets.",
        features: [
            "Advanced Penetration Testing",
            "Real-Time Threat Monitoring",
            "Zero-Trust Security Frameworks",
            "Compliance & Governance Audits",
            "Incident Response Teams"
        ],
        icon: ShieldCheck
    },
    {
        id: 'tailored-solutions',
        title: "Tailored Solutions",
        shortDescription: "Engineering bespoke solutions for unique, high-complexity challenges.",
        fullDescription: "Standard software doesn't fit every business. When you face unique operational challenges that off-the-shelf tools can't solve, we engineer custom solutions from the ground up. We build specific, high-impact tools designed exclusively for your workflows, giving you a capability your competitors can't buy.",
        features: [
            "Bespoke Enterprise Software",
            "Complex Workflow Automation",
            "Legacy System Modernization",
            "Niche Industry Applications",
            "Specialized Integration Middleware"
        ],
        icon: Settings
    }
];
