import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Get in <span className="text-[#ef4444]">Touch</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Whether you need a customized fire safety system, advanced security solutions, or a consultation, our expert team is here to help. Reach out to us today!
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
