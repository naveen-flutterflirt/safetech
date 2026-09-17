"use client";
import { Phone, Mail, MapPin, ChevronDown, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().min(1, "Phone is required").regex(/^\+?[0-9]{10,15}$/, "Please enter a valid mobile number (10-15 digits)"),
  email: z.string().min(1, "Email is required").email("Must be a valid email format"),
  service: z.enum(["cctv", "fire", "solar", "geyser", "other"], {
    message: "Please select a valid service",
  }),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: undefined,
      message: "",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log("Submitting form with data:", data); // Added log for debugging
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
          query_type: "contact",
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          priority: "normal"
        }),
      });

      const responseData = await response.json().catch(() => null);
      console.log("Server Response Status:", response.status); // Added log for debugging
      console.log("Server Response Data:", responseData); // Added log for debugging

      if (response.status === 201 || response.ok) {
        toast.success(
          responseData?.message || 
          (responseData ? JSON.stringify(responseData) : "Thank you for contacting us. We will get back to you shortly."),
          { duration: 5000 }
        );
        reset();
      } else if (response.status === 422) {
        toast.error(
          responseData?.detail ? JSON.stringify(responseData.detail) : "Please check your inputs and try again.",
          { duration: 5000 }
        );
      } else {
        toast.error(
          responseData?.detail || (responseData ? JSON.stringify(responseData) : "Something went wrong on our end. Please try again later."),
          { duration: 5000 }
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please make sure you are connected.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="bg-[#050505] py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Secure & Power Your Business
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us what you need. Our team will assess your requirements and recommend the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Form */}
          <div className="bg-[#111] border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Get a Free Consultation</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    {...register("phone")}
                    className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <div className="relative">
                  <select
                    {...register("service")}
                    defaultValue=""
                    className={`w-full bg-black border ${errors.service ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 appearance-none`}
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="cctv">CCTV & Security</option>
                    <option value="fire">Fire & Safety</option>
                    <option value="solar">Solar Power</option>
                    <option value="geyser">Solar Geyser</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                    <ChevronDown size={18} />
                  </div>
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your requirement..."
                  rows={4}
                  {...register("message")}
                  className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black font-bold text-lg rounded-xl py-4 mt-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Sending...
                  </>
                ) : (
                  "GET QUOTE"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8 lg:pl-10">
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 text-gray-300">
                  <MapPin className="text-white mt-1" />
                  <div>
                    <p className="font-bold text-white">Office Address</p>
                    <p className="text-sm">5FVC+X96, Bagmugaliya,<br />Bhopal, Madhya Pradesh 462043</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone className="text-white" />
                  <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-sm">8926104326</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="text-white" />
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-sm">info@flutterflirt.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 w-full bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=5FVC%2BX96%2C%20Bagmugaliya%2C%20Bhopal%2C%20Madhya%20Pradesh%20462043&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
