import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Power Solutions",
  description: "Reduce your electricity bills with Safetech's commercial and residential solar power solutions. Expert installation of on-grid and hybrid solar panels.",
};

export default function SolarPowerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
