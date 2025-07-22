"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Mail, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCallFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  preferredTime: string;
  callType: string;
  message: string;
}

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [formData, setFormData] = useState<BookCallFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    preferredTime: "",
    callType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        alert(`Thank you ${formData.name}! We'll contact you at ${formData.email} to confirm your consultation call.`);
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          preferredDate: "",
          preferredTime: "",
          callType: "",
          message: "",
        });
      } else {
        alert(result.error || "There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookCallFormData, value: string) => {
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
              Book Your Free Consultation
            </h2>
            <p className="text-gray-400">
              Schedule a 30-minute call to discuss your automation needs
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
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <User className="h-4 w-4" />
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>

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

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Company */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Building className="h-4 w-4" />
              Company Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Your company name"
            />
          </div>

          {/* Call Type */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              Consultation Type
            </label>
            <select
              required
              value={formData.callType}
              onChange={(e) => handleInputChange("callType", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select consultation type</option>
              <option value="automation-strategy">Automation Strategy Session</option>
              <option value="implementation-planning">Implementation Planning</option>
              <option value="roi-analysis">ROI Analysis & Business Case</option>
              <option value="technical-review">Technical Architecture Review</option>
              <option value="general-consultation">General Consultation</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Calendar className="h-4 w-4" />
              Preferred Date
            </label>
            <input
              type="date"
              required
              value={formData.preferredDate}
              onChange={(e) => handleInputChange("preferredDate", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              <Clock className="h-4 w-4" />
              Preferred Time
            </label>
            <select
              required
              value={formData.preferredTime}
              onChange={(e) => handleInputChange("preferredTime", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select preferred time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 text-white font-medium mb-2">
              Additional Information
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              rows={3}
              placeholder="Tell us about your automation goals, current challenges, or any specific topics you'd like to discuss..."
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
                Scheduling Your Call...
              </div>
            ) : (
              "Schedule Free Consultation"
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>We'll contact you within 24 hours to confirm your consultation time.</p>
        </div>
      </div>
    </div>
  );
} 