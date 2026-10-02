import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial & Business Solutions",
  description: "Protect your business and commercial property with Safetech. Explore enterprise CCTV, fire safety systems, and commercial solar energy solutions.",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
