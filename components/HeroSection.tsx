"use client";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AuditModal from "./AuditModal";
import dynamic from "next/dynamic";

// Dynamically import HeroParticles with no SSR to ensure it works on live site
const HeroParticles = dynamic(() => import("./HeroParticles"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" />
});

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAuditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 overflow-hidden">
        <HeroParticles />
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left: Text */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <Badge className="mb-6 bg-blue-600/10 text-blue-400 border-blue-600/20 px-4 py-2">
              🚀 AI-Powered Business Automation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="block">Outpace.</span>
              <span className="block text-red-400">Outperform.</span>
              <span className="block">Outgrow.</span>
              <span className="block text-blue-400 text-3xl mt-2">AI isn't the future — it's the advantage.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Nuvaru builds custom AI automation that slashes costs, unlocks growth, and eliminates the grind across Marketing, HR, Finance, and Ops. While others are stuck scaling teams, you'll be scaling revenue. The businesses that move now will dominate. Be one of them.
            </p>
            <Button 
              size="lg" 
              onClick={handleAuditClick}
              className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get Your Free Automation Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-2 border-gray-900"
                    ></div>
                  ))}
                </div>
                <span className="text-sm">50+ businesses automated</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm ml-2">4.9/5 client satisfaction</span>
              </div>
            </div>
          </div>
          {/* Right: Video */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg">
            <div className="relative rounded-3xl shadow-2xl border border-blue-900 bg-gradient-to-br from-blue-900/30 to-green-900/10 p-2 w-full">
              <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src="https://share.synthesia.io/embeds/videos/2fc4d964-60c2-4016-921b-3375a4d91be1"
                  loading="lazy"
                  title="Synthesia video player - Untitled"
                  allowFullScreen
                  allow="encrypted-media; fullscreen;"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", padding: 0, margin: 0, overflow: "hidden" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Modal */}
      <AuditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
} 