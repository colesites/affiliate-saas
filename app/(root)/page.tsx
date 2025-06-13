import CTA from "@/components/CTA";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Globe,
  DollarSign,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Features Section */}
      <FeaturesSection />
      <SocialProof />
      {/* CTA Section */}
      <CTA />
    </div>
  );
}
