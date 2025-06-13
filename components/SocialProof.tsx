import React from "react";
import Image from "next/image"; // Using Next.js Image for optimization
import { Star } from "lucide-react";

// --- You can easily customize the testimonials here ---
const testimonials = [
  {
    quote: "This platform transformed our sales. The automated payouts and detailed analytics are game-changers for vendors like us.",
    name: "Sarah L.",
    role: "Top Vendor",
    avatar: "/avatars/sarah.jpg", // Make sure to have these images in your public/avatars folder
  },
  {
    quote: "As an affiliate, finding great products and getting paid on time is everything. This platform nails it. My income has doubled!",
    name: "David Chen",
    role: "Pro Affiliate",
    avatar: "/avatars/david.jpg",
  },
  {
    quote: "The support is incredible, and the interface is so easy to use. I was set up and earning commissions in less than an hour.",
    name: "Maria G.",
    role: "Affiliate Marketer",
    avatar: "/avatars/maria.jpg",
  },
  {
    quote: "Finally, an affiliate network that feels like a true partner. The multi-currency support opened up a global market for my digital goods.",
    name: "Alex Johnson",
    role: "Digital Creator",
    avatar: "/avatars/alex.jpg",
  },
  {
    quote: "The quality of products and the transparency in tracking are unmatched. I've left other networks for this one.",
    name: "Emily R.",
    role: "Content Creator",
    avatar: "/avatars/emily.jpg",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Trusted by Top <span className="text-primary">Vendors</span> &{" "}
            <span className="text-secondary">Affiliates</span>
          </h2>
          <p className="text-lg text-black/70 mt-4 max-w-2xl mx-auto">
            Our platform isn't just a tool, it's a growth engine. Here's what
            our users are saying about their success.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div
          className="relative w-full overflow-hidden"
          // This applies a fade-out effect on the left and right edges
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <div className="flex animate-scroll">
            {/* We need to duplicate the content to create a seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index} // Using index is fine here as the array is static during render
                className="flex-shrink-0 w-[350px] mx-4 p-6 border border-black/10 rounded-2xl shadow-lg"
              >
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-black/80 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-secondary"
                  />
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;