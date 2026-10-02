"use client";

import { Wrench, ShieldCheck, MapPin, Phone, Mail, ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";

const amcSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().min(1, "Phone is required").regex(/^\+?[0-9]{10,15}$/, "Please enter a valid mobile number (10-15 digits)"),
  email: z.string().min(1, "Email is required").email("Must be a valid email format"),
  contract_number: z.string().optional(),
  system_type: z.enum(["cctv", "fire", "solar_power", "solar_geyser", "other"], {
    message: "Please select a system type",
  }),
  priority: z.enum(["low", "medium", "high"]),
  issue_description: z.string().min(1, "Issue description is required").max(1000, "Message must be less than 1000 characters"),
});

type AMCFormValues = z.infer<typeof amcSchema>;

export default function AMCRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AMCFormValues>({
    resolver: zodResolver(amcSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      contract_number: "",
      system_type: undefined,
      priority: "medium",
      issue_description: "",
    }
  });

  const onSubmit = async (data: AMCFormValues) => {
    setIsSubmitting(true);
    console.log("Submitting AMC request with data:", data);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const apiKey = process.env.NEXT_PUBLIC_API_KEY || "sk_live_testkey123"; 

      const response = await fetch(`${apiUrl}/api/v1/queries/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}` 
        },
        body: JSON.stringify({
          query_type: "amc_request", 
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.system_type, 
          message: data.issue_description,
          priority: data.priority, 
          metadata_json: {
            contract_number: data.contract_number || null,
          }
        }),
      });

      const responseData = await response.json().catch(() => null);
      console.log("Server Response Status:", response.status);
      console.log("Server Response Data:", responseData);

      if (response.status === 201 || response.ok) {
        toast.success("AMC Request submitted successfully. We will contact you soon.");
        reset();
      } else if (response.status === 422) {
        toast.error("Please check your inputs and try again.");
      } else {
        toast.error(responseData?.detail || "Failed to submit AMC request. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please make sure you are connected.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden pt-32 pb-24">
      {/* Background accents */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-[#3b82f6]/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <Wrench size={32} className="text-[#3b82f6]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            AMC Service <span className="text-[#3b82f6]">Request</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Already have an Annual Maintenance Contract? Log your service request below and our technicians will be dispatched to resolve your issue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Form */}
          <div className="bg-[#111] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-blue-400"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Log a Maintenance Request</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">Full Name</label>
                  <input type="text" placeholder="John Doe" {...register("name")} className={`bg-black border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" {...register("phone")} className={`bg-black border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Account Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">Email Address</label>
                  <input type="email" placeholder="john@example.com" {...register("email")} className={`bg-black border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">Contract Number (Optional)</label>
                  <input type="text" placeholder="AMC-XXXX-YYYY" {...register("contract_number")} className={`bg-black border ${errors.contract_number ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors`} />
                  {errors.contract_number && <p className="text-red-500 text-xs mt-1">{errors.contract_number.message}</p>}
                </div>
              </div>
              
              {/* Service & Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">System Type</label>
                  <div className="relative">
                    <select defaultValue="" {...register("system_type")} className={`w-full bg-black border ${errors.system_type ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors appearance-none`}>
                      <option value="" disabled>Select System</option>
                      <option value="cctv">CCTV & Surveillance</option>
                      <option value="fire">Fire Safety System</option>
                      <option value="solar_power">Solar Power Plant</option>
                      <option value="solar_geyser">Solar Water Heater</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                  {errors.system_type && <p className="text-red-500 text-xs mt-1">{errors.system_type.message}</p>}
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">Issue Priority</label>
                  <div className="relative">
                    <select defaultValue="medium" {...register("priority")} className={`w-full bg-black border ${errors.priority ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors appearance-none`}>
                      <option value="low">Low (Routine Maintenance)</option>
                      <option value="medium">Medium (Partial Failure)</option>
                      <option value="high">High (Complete System Failure)</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                  {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority.message}</p>}
                </div>
              </div>

              {/* Issue Description */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-400">Issue Description</label>
                <textarea placeholder="Please describe the issue you are facing..." rows={4} {...register("issue_description")} className={`bg-black border ${errors.issue_description ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#3b82f6]/50 transition-colors resize-none`}></textarea>
                {errors.issue_description && <p className="text-red-500 text-xs mt-1">{errors.issue_description.message}</p>}
              </div>
              
              <button type="submit" disabled={isSubmitting} className="bg-[#3b82f6] text-white font-bold text-lg rounded-xl py-4 mt-4 hover:bg-blue-600 transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Submitting...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={20} /> Submit Service Request
                  </>
                )}
              </button>
            </form>
          </div>

          {/* AMC Benefits & Info */}
          <div className="flex flex-col justify-center gap-10 lg:pl-10">
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Maintain an AMC?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Regular maintenance is crucial for life-safety and security systems. Our Annual Maintenance Contracts ensure your equipment works flawlessly when you need it most.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                    <Wrench size={24} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Preventative Maintenance</h4>
                    <p className="text-sm text-gray-400">Regular checkups identify and fix potential issues before they cause system failures.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                    <ShieldCheck size={24} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Priority Support</h4>
                    <p className="text-sm text-gray-400">AMC customers get pushed to the front of the queue for emergency repairs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-white/5 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-4">Need immediate emergency support?</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-[#3b82f6]" />
                  <span>+91 98765 43210 (24/7 Hotline)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-[#3b82f6]" />
                  <span>support@safetech.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
