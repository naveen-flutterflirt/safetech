import Link from "next/link";
import { AlertTriangle, Mail, MapPin, Phone } from "lucide-react";

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 16, 2026";

  const sections = [
    { id: "services", title: "1. Services" },
    { id: "website-use", title: "2. Website Use" },
    { id: "inquiry-based-bookings", title: "3. Inquiry-Based Bookings" },
    { id: "quotations", title: "4. Quotations" },
    { id: "payments", title: "5. Payments" },
    { id: "cancellation-and-refunds", title: "6. Cancellation and Refunds" },
    { id: "installation-responsibilities", title: "7. Installation Responsibilities" },
    { id: "warranty", title: "8. Warranty" },
    { id: "service-limitations", title: "9. Service Limitations" },
    { id: "intellectual-property", title: "10. Intellectual Property" },
    { id: "third-party-services", title: "11. Third-Party Services" },
    { id: "availability-and-changes", title: "12. Availability and Changes" },
    { id: "disclaimer", title: "13. Disclaimer" },
    { id: "liability", title: "14. Liability" },
    { id: "indemnity", title: "15. Indemnity" },
    { id: "governing-law", title: "16. Governing Law and Jurisdiction" },
    { id: "updates", title: "17. Updates" },
    { id: "contact", title: "18. Contact" },
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
            Terms and Conditions
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
            <p className="text-amber-500/80 text-sm mb-3">
              This is a working draft, not legal advice. Obtain review by a qualified lawyer before publication, particularly for data protection, warranties, cancellation/refunds, liability, governing law, and jurisdiction.
            </p>
            <details className="text-sm">
              <summary className="text-amber-500 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded list-none inline-flex items-center gap-2">
                View Pre-Publication Checklist
                <span className="text-amber-500/50">▼</span>
              </summary>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-amber-500/80">
                <li>Insert last-updated date.</li>
                <li>Verify legal company name and domain.</li>
                <li>Confirm AWS services and hosting arrangement.</li>
                <li>Identify actual email provider.</li>
                <li>Confirm Google Maps implementation.</li>
                <li>Confirm analytics, cookies, pixels, and tracking.</li>
                <li>Define data retention and privacy-request procedures.</li>
                <li>Finalize manufacturer and workmanship warranty terms.</li>
                <li>Finalize cancellation/refund terms.</li>
                <li>Add quotation validity, taxes, exclusions, and payment schedule.</li>
                <li>Obtain legal review of liability, indemnity, governing law, and jurisdiction.</li>
                <li>Ensure the policy matches the website's actual behavior.</li>
              </ul>
            </details>
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
                These Terms govern use of the Safetech website, operated by Flutterflirt Pvt. Limited. By using the website, you agree to use it lawfully and responsibly.
              </p>
            </section>

            <section id="services" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">1. Services</h2>
              <p className="mb-4">Safetech provides consultancy, installation, and related services involving:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-400">
                <li>CCTV and Surveillance</li>
                <li>Fire Safety Systems</li>
                <li>Solar Power Solutions</li>
                <li>Solar Water Heating and Solar Geysers</li>
              </ul>
              <p>The actual scope is determined by the applicable quotation, work order, service agreement, or written confirmation.</p>
            </section>

            <section id="website-use" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">2. Website Use</h2>
              <p className="mb-4">Visitors may view services, submit forms, request consultations, request quotations, and submit service inquiries.</p>
              <p>Users must not submit false information, misuse forms, attempt unauthorized access, interfere with website operation, upload malicious code, or use the website unlawfully.</p>
            </section>

            <section id="inquiry-based-bookings" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">3. Inquiry-Based Bookings</h2>
              <p className="mb-4">Submitting a form:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-400">
                <li>Does not automatically confirm a booking</li>
                <li>Does not guarantee availability</li>
                <li>Does not establish a service contract</li>
                <li>Does not guarantee a final price or installation date</li>
              </ul>
              <p>A booking or project is confirmed only through written confirmation, an accepted quotation, work order, or service agreement.</p>
            </section>

            <section id="quotations" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">4. Quotations</h2>
              <p className="mb-4">Each project generally receives a customized quotation after discussing requirements. Quotations may depend on site conditions, product availability, installation complexity, equipment, labour, transportation, taxes, and customer requirements.</p>
              <p>The quotation should state its validity period, inclusions, exclusions, taxes, timeline, and payment conditions.</p>
            </section>

            <section id="payments" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">5. Payments</h2>
              <p>Payments are handled offline, including cash, bank transfer, or another agreed method. Payment timing, advances, milestones, taxes, and payment instructions should be specified in the quotation or service agreement.</p>
            </section>

            <section id="cancellation-and-refunds" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">6. Cancellation and Refunds</h2>
              <p className="mb-4">Cancellation is handled according to the applicable quotation, work order, or service agreement. That document should state notice requirements, charges for completed work, costs for ordered/customized materials, refund conditions, and refund timelines.</p>
              <p className="text-amber-500/80 italic text-sm">Do not publish fixed refund promises until the Company approves its policy and obtains legal review.</p>
            </section>

            <section id="installation-responsibilities" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">7. Installation Responsibilities</h2>
              <p>Customers may need to provide accurate information, reasonable site access, required permissions, site readiness, and compliance with product instructions. Delays caused by unavailable access, inaccurate information, missing permissions, customer changes, suppliers, weather, or other external circumstances may affect timelines.</p>
            </section>

            <section id="warranty" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">8. Warranty</h2>
              <p className="mb-4">Warranty coverage may include manufacturer warranties, installation/workmanship warranties, or both, depending on the product and project.</p>
              <p className="mb-4">The applicable quotation, warranty document, or service agreement should identify the provider, duration, covered work/products, claim process, exclusions, and maintenance requirements. Manufacturer warranties remain subject to the manufacturer’s written terms.</p>
              <p className="text-amber-500/80 italic text-sm">The Company must finalize exact warranty conditions before publication.</p>
            </section>

            <section id="service-limitations" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">9. Service Limitations</h2>
              <p>Performance may depend on site conditions, electrical infrastructure, internet connectivity, power quality, product compatibility, maintenance, usage, manufacturer specifications, and environmental conditions. Specific performance commitments must be stated in project documentation.</p>
            </section>

            <section id="intellectual-property" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
              <p>Unless otherwise stated, original Safetech website branding, text, graphics, design, layout, and content are owned by or licensed to Flutterflirt Pvt. Limited. Third-party trademarks and manufacturer materials remain the property of their respective owners.</p>
            </section>

            <section id="third-party-services" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Services</h2>
              <p>The website may use hosting, email, mapping, analytics, or external resources. Third-party services are subject to their own terms and policies, and uninterrupted operation is not guaranteed.</p>
            </section>

            <section id="availability-and-changes" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">12. Availability and Changes</h2>
              <p>We may modify, suspend, or discontinue website features or content, correct errors, and update service information without guaranteeing uninterrupted access.</p>
            </section>

            <section id="disclaimer" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">13. Disclaimer</h2>
              <p>Website content is general information and does not replace site assessment, technical evaluation, professional consultation, a quotation, or a written service agreement. Suitability depends on the customer’s specific requirements and site conditions.</p>
            </section>

            <section id="liability" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">14. Liability</h2>
              <p className="text-amber-500/80 italic text-sm">The liability section must be reviewed by qualified legal counsel for enforceability under applicable law, including treatment of direct and indirect losses, statutory rights, consumer rights, and contractual limits.</p>
            </section>

            <section id="indemnity" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">15. Indemnity</h2>
              <p className="text-amber-500/80 italic text-sm">The final indemnity wording must be reviewed by qualified legal counsel and must not remove or restrict rights that cannot lawfully be excluded.</p>
            </section>

            <section id="governing-law" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">16. Governing Law and Jurisdiction</h2>
              <p className="text-amber-500/80 italic text-sm">Governing law and specific jurisdiction are pending legal advice. Complete and approve this section with qualified legal counsel before publication.</p>
            </section>

            <section id="updates" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4">17. Updates</h2>
              <p>We may update these Terms from time to time. Changes will be posted with an updated “Last Updated” date.</p>
            </section>

            <section id="contact" className="scroll-mt-32 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">18. Contact</h2>
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
