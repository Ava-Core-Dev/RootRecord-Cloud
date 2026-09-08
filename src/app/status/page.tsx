import type { Metadata } from "next";
import Dashboard from "../page";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Status — Root Record",
  description: "Full solar desk and host status for the HI Pacific Solar Root Server.",
};

export default function StatusPage() {
  return <Dashboard />;
}
