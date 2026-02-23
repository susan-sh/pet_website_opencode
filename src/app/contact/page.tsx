import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageInner from "./pageInner";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us about adoption, volunteering, or general questions.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageInner />
    </Suspense>
  );
}
