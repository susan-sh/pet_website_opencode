import type { Metadata } from "next";
import { PETS } from "@/lib/pets";
import PetsClient from "./PetsClient";

export const metadata: Metadata = {
  title: "Pets",
  description: "Browse adoptable pets and filter by type.",
};

export default function PetsPage() {
  return <PetsClient pets={PETS} />;
}
