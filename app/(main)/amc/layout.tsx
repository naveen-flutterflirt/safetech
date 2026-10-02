import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMC Service Request",
  description: "Request an Annual Maintenance Contract (AMC) for your Safetech systems. We provide regular maintenance to ensure your equipment runs smoothly.",
};

export default function AMCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
