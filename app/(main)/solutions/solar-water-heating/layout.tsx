import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Water Heating & Geysers",
  description: "Cost-effective solar water heating systems for homes and businesses. Enjoy reliable hot water while reducing your energy bills with Safetech.",
};

export default function SolarGeyserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
