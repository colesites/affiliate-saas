import React from "react";
import Image from "next/image";
import { 
  Workflow,
  Globe2,
  ShieldCheck,
  PackagePlus,
  MousePointerClick,
  BarChartBig,
} from "lucide-react";

const featuresData = [
  {
    icon: Workflow,
    title: "A Powerful Ecosystem",
    description: "Our platform is built on a robust multi-role system, providing tailored dashboards and permissions for Admins, Vendors, Affiliates, and Customers. Everyone gets the exact tools they need to succeed.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    icon: Globe2,
    title: "Global Payments & Commissions",
    description: "Accept payments in NGN, USD, GBP, and more with Stripe, PayPal, and Paystack. Affiliates receive instant email notifications for every sale, tracking their success in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Ironclad Security & Anti-Piracy",
    description: "We host all digital products directly, preventing unauthorized downloads and screen recording. With DDoS protection and encrypted payments, your content and earnings are always secure.",
    image: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: PackagePlus,
    title: "Effortless Product Management",
    description: "Vendors can easily upload digital products or create subscriptions. Set custom affiliate commissions as a percentage or a fixed amount, and provide promotional materials all from one intuitive panel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: MousePointerClick,
    title: "Complete Affiliate Toolkit",
    description: "Every affiliate gets a unique tracking link and auto-generated sales page for each product. The affiliate dashboard provides deep insights into clicks, conversions, and earnings.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: BarChartBig,
    title: "Insightful Analytics",
    description: "Make data-driven decisions with comprehensive analytics. Vendors can track top affiliates and product sales, while the admin dashboard provides a platform-wide overview of all activity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

type FeatureItemProps = {
  feature: typeof featuresData[0];
  index: number;
};

// --- This component now contains the updated, more visible glow div ---
const FeatureItem = ({ feature, index }: FeatureItemProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center`}>
      <div className={`relative w-full h-96 ${isReversed ? "md:order-last" : ""}`}>
        
        {/* ========================================================== */}
        {/* THE UPDATED GLOW DIV - LARGER, BRIGHTER, AND MORE VISIBLE */}
        {/* ========================================================== */}
        <div 
          className={`absolute inset-0 w-96 h-96 m-auto bg-primary ${index % 2 === 0 ? 'from-primary/40' : 'from-secondary/40'} to-transparent to-70% blur-3xl`}
          aria-hidden="true" 
        />

        <Image
          src={feature.image}
          alt={feature.title}
          layout="fill"
          objectFit="contain"
          className="z-10"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
        </div>
        <p className="text-black/70 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};


const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
            FEATURES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Everything You Need to Succeed
          </h2>
        </div>
        <div className="flex flex-col gap-24 md:gap-32">
          {featuresData.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;