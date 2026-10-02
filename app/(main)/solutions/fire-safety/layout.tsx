import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Systems",
  description: "Protect your property with Safetech's advanced fire alarms, smoke detectors, and fire safety systems. Expert installation and maintenance.",
};

export default function FireSafetyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
