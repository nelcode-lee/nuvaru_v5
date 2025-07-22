"use client";

import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Star,
  Users,
  TrendingUp,
  Clock,
  Zap,
  BarChart3,
  Shield,
  Megaphone,
  Eye,
  MessageSquare,
  Clipboard,
  UserPlus,
  Database,
  Headphones,
  Link2,
  FileText,
  Search,
  Settings,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroSection from "@/components/HeroSection";
import BookCallModal from "@/components/BookCallModal";
import { useState } from "react";

export default function HomePage() {
  const [isBookCallModalOpen, setIsBookCallModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/nuvaru-logo.png" alt="Nuvaru Logo" className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-gray-300 hover:text-white transition-colors">
                Process
              </Link>
              <Link href="#results" className="text-gray-300 hover:text-white transition-colors">
                Results
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsBookCallModalOpen(true)}
              >
                Book a Call
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Are You Drowning in <span className="text-red-400">Repetitive Tasks?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most business owners spend 60% of their time on tasks that could be automated, instead of focusing on
              growth and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Time Wasted", desc: "Hours spent on manual data entry and repetitive processes" },
              {
                icon: Users,
                title: "Team Burnout",
                desc: "Staff overwhelmed with mundane tasks instead of strategic work",
              },
              {
                icon: TrendingUp,
                title: "Missed Growth",
                desc: "Opportunities lost while managing day-to-day operations",
              },
              { icon: BarChart3, title: "Poor Insights", desc: "Decisions made without real-time data and analytics" },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 text-center p-6">
                <item.icon className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Build <span className="text-blue-400">AI Systems</span> That Work 24/7
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Custom automation solutions that integrate seamlessly with your existing tools and processes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">What We Automate For You</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Marketing Automation",
                    desc: "Lead generation, email campaigns, social media, and customer nurturing on autopilot",
                  },
                  {
                    title: "HR & Recruitment",
                    desc: "Candidate screening, onboarding workflows, and employee management systems",
                  },
                  {
                    title: "Finance Operations",
                    desc: "Invoice processing, payment tracking, expense management, and financial reporting",
                  },
                  {
                    title: "Business Operations",
                    desc: "Project management, inventory tracking, quality assurance, and workflow optimization",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-gray-700">
              <div className="text-center">
                <Zap className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-4">Average Results</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-400">75%</div>
                    <div className="text-sm text-gray-400">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">3x</div>
                    <div className="text-sm text-gray-400">Productivity Boost</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">90%</div>
                    <div className="text-sm text-gray-400">Error Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-400">Operation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The endless use cases of <span className="text-blue-400">AI</span> and{" "}
              <span className="text-blue-400">Automation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Our clients make their employees 10X more efficient by taking tedious, repetitive tasks off their plate.
              We are industry agnostic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: "Sales and marketing automation",
                desc: "Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more.",
              },
              {
                icon: Eye,
                title: "Image, voice, text recognition and analysis",
                desc: "Analyze and parse documents, biometrics, emotion, facial, products, videos and more to summarize or automate actions based off keywords, identity, sentiment, etc.",
              },
              {
                icon: BarChart3,
                title: "Predictive analytics",
                desc: "Data-driven decision making through risk analytics, demand or inventory forecasting and other future planning tasks.",
              },
              {
                icon: MessageSquare,
                title: "Conversational AI",
                desc: "Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.",
              },
              {
                icon: Clipboard,
                title: "Project management",
                desc: "We connect all manual, repetitive steps in a process, from task handoff to completion. Such as onboarding, admin, accounting, invoicing.",
              },
              {
                icon: UserPlus,
                title: "Staff augmentation",
                desc: "Save employees hours a day by automating their most tedious daily tasks. We've even replaced entire teams of virtual assistants.",
              },
              {
                icon: Database,
                title: "Data silos",
                desc: "Break down data barriers and create unified information flows across your entire organization for better insights.",
              },
              {
                icon: Headphones,
                title: "Customer service",
                desc: "Automated support systems that handle inquiries, route tickets, and provide instant responses to common questions.",
              },
              {
                icon: Link2,
                title: "Connect apps",
                desc: "Seamlessly integrate all your business tools and platforms to create automated workflows between systems.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 p-6 text-center hover:border-blue-600/50 transition-colors"
              >
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-blue-400">Serve</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              From healthcare to construction, we've automated processes across diverse sectors. Our solutions adapt to
              your industry's unique challenges and requirements.
            </p>

            {/* Industry Tags */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {[
                "All",
                "Logistics & Supply Chain",
                "Construction",
                "Engineering",
                "Marketing",
                "Accounting",
                "Legal",
                "Property Management",
                "NHS",
                "Public Services",
              ].map((industry, index) => (
                <Badge
                  key={index}
                  className={`px-6 py-3 text-sm font-medium rounded-full cursor-pointer transition-all hover:scale-105 ${
                    industry === "All"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600/20"
                  }`}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How our <span className="text-blue-400">AI</span> and <span className="text-blue-400">Automation</span>{" "}
              agency works
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              We get under the hood of your business and find opportunities to replace the most manual, repetitive and
              expensive bottlenecks with AI-powered, automated processes. We only use AI if there's a practical use
              case.
            </p>
          </div>

          {/* Desktop Process Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Animated Dotted Line */}
              <div className="absolute top-20 left-0 right-0 h-px flex items-center justify-center">
                <div className="w-full max-w-5xl mx-auto relative">
                  <div className="absolute inset-0 border-t-2 border-dotted border-blue-400/30"></div>
                  <div className="absolute inset-0 border-t-2 border-dotted border-blue-400 animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
                {[
                  {
                    step: "STEP 1",
                    title: "We map out your processes",
                    desc: "We'll create a visual map of all your systems, manual tasks and apps.",
                    icon: FileText,
                  },
                  {
                    step: "STEP 2",
                    title: "We find areas to add AI and automate",
                    desc: "We audit your workflows to pinpoint opportunities with the highest ROI.",
                    icon: Search,
                  },
                  {
                    step: "STEP 3",
                    title: "We build and test",
                    desc: "We use a mix of custom code, AI tools, Zapier, Make.com and your tech stack.",
                    icon: Settings,
                  },
                  {
                    step: "STEP 4",
                    title: "We manage and iterate",
                    desc: "Every client we work with grows, so there's always new things to automate.",
                    icon: Sparkles,
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6 hover:border-blue-600/50 transition-colors">
                      <item.icon className="h-12 w-12 text-blue-400 mx-auto" />
                    </div>
                    <div className="text-sm text-blue-400 font-semibold mb-2">{item.step}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Process Flow */}
          <div className="lg:hidden space-y-8">
            {[
              {
                step: "STEP 1",
                title: "We map out your processes",
                desc: "We'll create a visual map of all your systems, manual tasks and apps.",
                icon: FileText,
              },
              {
                step: "STEP 2",
                title: "We find areas to add AI and automate",
                desc: "We audit your workflows to pinpoint opportunities with the highest ROI.",
                icon: Search,
              },
              {
                step: "STEP 3",
                title: "We build and test",
                desc: "We use a mix of custom code, AI tools, Zapier, Make.com and your tech stack.",
                icon: Settings,
              },
              {
                step: "STEP 4",
                title: "We manage and iterate",
                desc: "Every client we work with grows, so there's always new things to automate.",
                icon: Sparkles,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 flex-shrink-0">
                  <item.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-1">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results From <span className="text-green-400">Real Businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Tech Startup",
                result: "Reduced hiring time by 80%",
                desc: "Automated candidate screening and interview scheduling",
                metric: "80%",
                color: "text-blue-400",
              },
              {
                company: "E-commerce Store",
                result: "Increased sales by 150%",
                desc: "Automated email marketing and customer segmentation",
                metric: "150%",
                color: "text-green-400",
              },
              {
                company: "Service Business",
                result: "Cut admin time by 70%",
                desc: "Automated invoicing and project management workflows",
                metric: "70%",
                color: "text-yellow-400",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6">
                <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.result}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <div className="text-xs text-gray-500">{item.company}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-green-600/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-blue-400">Automate Your Business?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Book a free 30-minute consultation and discover how much time and money you could save with automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
              onClick={() => setIsBookCallModalOpen(true)}
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>30-minute session</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Instant value guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Ready to transform your business operations? Let's talk.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">info@nuvaru.co.uk</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/447741654145" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +44 774 165 4145
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Hull, UK</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/nuvaru-logo.png" alt="Nuvaru Logo" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">© 2024 Nuvaru. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookCallModal isOpen={isBookCallModalOpen} onClose={() => setIsBookCallModalOpen(false)} />
    </div>
  )
}
// Cache bust: 1753227021
// Force deployment 1753228448
