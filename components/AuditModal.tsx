"use client";

import { useState } from "react";
import { X, Mail, Building, Target, AlertTriangle, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuditFormData {
  email: string;
  industry: string;
  businessArea: string;
  painPoints: string;
  currentTechnologies: string;
}

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [formData, setFormData] = useState<AuditFormData>({
    email: "",
    industry: "",
    businessArea: "",
    painPoints: "",
    currentTechnologies: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit audit request');
      }

      // Success - show confirmation with report preview
      const reportPreview = result.data.reportPreview || 'Your personalized audit report is being generated...';
      alert(`Thank you! Your AI-powered audit report has been generated and sent to ${formData.email}.\n\nCheck your email for the complete report with personalized recommendations.\n\nPreview: ${reportPreview}`);
      onClose();
      
      // Reset form
      setFormData({
        email: "",
        industry: "",
        businessArea: "",
        painPoints: "",
        currentTechnologies: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof AuditFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Free Automation Audit
            </h2>
            <p className="text-gray-400">
              Get a personalized analysis of your automation opportunities
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Mail className="h-4 w-4" />
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Building className="h-4 w-4" />
              Industry
            </label>
            <select
              required
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select your industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="education">Education</option>
              <option value="consulting">Consulting</option>
              <option value="real-estate">Real Estate</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Business Area */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Target className="h-4 w-4" />
              Area of Business to Improve
            </label>
            <select
              required
              value={formData.businessArea}
              onChange={(e) => handleInputChange("businessArea", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select area to improve</option>
              <option value="sales">Sales & Revenue</option>
              <option value="marketing">Marketing & Lead Generation</option>
              <option value="operations">Operations & Efficiency</option>
              <option value="customer-service">Customer Service</option>
              <option value="hr">HR & Recruitment</option>
              <option value="finance">Finance & Accounting</option>
              <option value="data-analysis">Data Analysis & Reporting</option>
              <option value="multiple">Multiple Areas</option>
            </select>
          </div>

          {/* Pain Points */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <AlertTriangle className="h-4 w-4" />
              Current Pain Points
            </label>
            <textarea
              required
              value={formData.painPoints}
              onChange={(e) => handleInputChange("painPoints", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              rows={3}
              placeholder="Describe your biggest challenges (e.g., manual processes, time-consuming tasks, data silos, etc.)"
            />
          </div>

          {/* Current Technologies */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Cpu className="h-4 w-4" />
              Current Technologies/Tools
            </label>
            <textarea
              value={formData.currentTechnologies}
              onChange={(e) => handleInputChange("currentTechnologies", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              rows={2}
              placeholder="What tools/software are you currently using? (e.g., Salesforce, HubSpot, Excel, etc.)"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Submitting Your Request...
              </div>
            ) : (
              "Get My Free Audit Report"
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Your audit report will be generated using AI and sent to your email within 24 hours.</p>
        </div>
      </div>
    </div>
  );
} 