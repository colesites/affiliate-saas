import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="container mx-auto text-center mt-28 z-10">
        <h1 className="text-4xl/[3rem] md:text-7xl/[6rem] font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <span>Scale Your <br /> Digital Product Sales</span>
          <br />
          <span>With Powerful <br /> Affiliate Marketing</span>
        </h1>
        <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
          Complete platform for vendors, affiliates, and customers.
          Multi-currency support, automated payouts, advanced analytics, and
          secure digital product delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard/admin">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">View Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
