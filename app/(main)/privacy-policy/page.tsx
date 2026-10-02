import Link from "next/link";
import { AlertTriangle, Mail, MapPin, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 16, 2026";

  const sections = [
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use-information", title: "2. How We Use Information" },
    { id: "inquiry-based-process", title: "3. Inquiry-Based Process" },
    { id: "storage-and-retention", title: "4. Storage and Retention" },
    { id: "access-and-security", title: "5. Access and Security" },
    { id: "third-party-services", title: "6. Third-Party Services" },
    { id: "cookies-and-analytics", title: "7. Cookies and Analytics" },
    { id: "sharing", title: "8. Sharing" },
    { id: "privacy-requests", title: "9. Privacy Requests" },
    { id: "children", title: "10. Children" },
    { id: "external-links", title: "11. External Links" },
    { id: "updates", title: "12. Updates" },
    { id: "contact", title: "13. Contact" },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden pt-32 pb-24">
      {/* Background accents */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-sm font-bold tracking-widest text-gray-300 uppercase">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Legal Review Alert */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-12 flex gap-4 items-start max-w-4xl">
          <AlertTriangle className="text-amber-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-amber-500 font-bold mb-1">Pre-Publication Warning</h3>
            <p className="text-amber-500/80 text-sm">
              This is a working draft, not legal advice. Obtain review by a qualified lawyer before publication, particularly for data protection, warranties, cancellation/refunds, liability, governing law, and jurisdiction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar TOC */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#111] border border-white/10 rounded-2xl p-6 hidden lg:block">
              <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contents</h3>
              <nav className="flex flex-col gap-3 text-sm">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Mobile TOC Collapsible */}
            <details className="lg:hidden bg-[#111] border border-white/10 rounded-2xl p-6 mb-8 group">
              <summary className="font-bold text-white uppercase tracking-wider text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 rounded list-none flex justify-between items-center">
                Table of Contents
                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <nav className="flex flex-col gap-4 text-sm mt-6 pt-6 border-t border-white/10">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                    {s.title}
                  </a>
                ))}
              </nav>
            </details>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 text-gray-300 leading-relaxed space-y-12">
            <section>
              <p>
                Flutterflirt Pvt. Limited, operating under the brand name Safetech (“Company,” “we,” “us,” or “our”), provides consultancy, installation, and related services for CCTV and surveillance systems, fire safety systems, solar power solutions, and solar water heating/solar geyser solutions.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">When you contact us, request a consultation, request a quotation, or submit a service inquiry, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-400">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message or service requirements</li>
                <li>Other information voluntarily provided in an inquiry</li>
              </ul>
              <p className="text-gray-400 italic">Please do not submit passwords, financial information, government identification numbers, or sensitive information through general contact forms.</p>
            </section>

            <section id="how-we-use-information" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
              <p className="mb-4">We may use submitted information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-400">
                <li>Respond to inquiries and questions</li>
                <li>Contact you manually or by email</li>
                <li>Understand service requirements</li>
                <li>Discuss consultations, quotations, bookings, and installations</li>
                <li>Coordinate requested services and follow-ups</li>
                <li>Maintain business and inquiry records</li>
                <li>Meet applicable legal, regulatory, and operational requirements</li>
              </ul>
              <p>We do not currently intend to use inquiry information for unrelated promotional marketing unless an appropriate legal basis or consent is obtained where required.</p>
            </section>

            <section id="inquiry-based-process" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">3. Inquiry-Based Process</h2>
              <p>Submitting a contact form does not automatically confirm a booking, quotation, installation appointment, or service contract. Authorized Flutterflirt/Safetech administrators may review the inquiry and contact the individual manually or by email.</p>
            </section>

            <section id="storage-and-retention" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">4. Storage and Retention</h2>
              <p className="mb-4">Information submitted through forms is stored in our database and may be processed through infrastructure used to operate our website and backend.</p>
              <p>We intend to retain information only as long as reasonably necessary for inquiry handling, business operations, legal obligations, dispute resolution, and recordkeeping. The specific period may vary according to the information and applicable legal or business requirements.</p>
            </section>

            <section id="access-and-security" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">5. Access and Security</h2>
              <p className="mb-4">Access is restricted to authorized Flutterflirt/Safetech administrators and personnel who need access for legitimate business purposes.</p>
              <p>We apply reasonable security practices, but no online transmission or storage system can be guaranteed completely secure.</p>
            </section>

            <section id="third-party-services" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
              <p className="mb-4">We may use:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-400">
                <li><strong>Amazon Web Services (AWS)</strong>: Hosting, infrastructure, or backend services</li>
                <li><strong>Email providers</strong>: Inquiry-related communication</li>
                <li><strong>Google Maps</strong>: Location-related features, if enabled</li>
              </ul>
              <p>Third-party providers may process information under their own policies. The Company must maintain a current list of actual providers before publication.</p>
            </section>

            <section id="cookies-and-analytics" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Analytics</h2>
              <p>Our analytics and tracking configuration has not yet been finalized. Before publication, confirm whether the website uses essential cookies, analytics, advertising/conversion tracking, embedded services, or preference cookies. Update this policy and any consent mechanism to match the tools actually deployed.</p>
            </section>

            <section id="sharing" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">8. Sharing</h2>
              <p>We do not intend to sell personal information submitted through inquiry forms. Information may be disclosed when reasonably necessary to provide services, operate systems, comply with law, protect rights and safety, or support a business transaction, subject to applicable law.</p>
            </section>

            <section id="privacy-requests" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">9. Privacy Requests</h2>
              <p>You may contact us to request access, correction, deletion where legally and operationally possible, information about processing, or withdrawal of consent where applicable. We may verify requests before acting and may retain information where legally required.</p>
            </section>

            <section id="children" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">10. Children</h2>
              <p>The website is intended for general audiences and is not specifically directed toward children. We do not knowingly request children’s personal information through general inquiry forms.</p>
            </section>

            <section id="external-links" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">11. External Links</h2>
              <p>Third-party websites and services linked from our website have their own privacy practices. We are not responsible for their policies, content, or security.</p>
            </section>

            <section id="updates" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">12. Updates</h2>
              <p>We may update this policy to reflect changes in services, technology, legal obligations, or business practices. The revised version will show an updated date.</p>
            </section>

            <section id="contact" className="scroll-mt-32 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">13. Contact</h2>
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8 space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-1">Flutterflirt Pvt. Limited — Safetech</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-white mt-1 shrink-0" size={20} />
                    <span className="text-gray-400">5FVC+X96, Bagmugaliya, Bhopal, Madhya Pradesh 462043</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-white shrink-0" size={20} />
                    <span className="text-gray-400">8926104326</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-white shrink-0" size={20} />
                    <a href="mailto:info@flutterflirt.com" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">info@flutterflirt.com</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
