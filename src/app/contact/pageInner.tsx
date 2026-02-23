'use client';

import { useSearchParams } from "next/navigation";
import ContactClient from "./ContactClient";

export default function ContactPageInner() {
  const searchParams = useSearchParams();
  const petName = searchParams.get("pet") ?? undefined;
  return <ContactClient petName={petName} />;
}
