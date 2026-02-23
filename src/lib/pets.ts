export type PetType = "Dog" | "Cat" | "Small Pet";

export type PetGender = "Male" | "Female";

export type PetTag =
  | "Playful"
  | "Good with Kids"
  | "Quiet"
  | "Indoor"
  | "Loyal"
  | "Chill"
  | "Curious"
  | "Energetic"
  | "Friendly"
  | "Smart"
  | "Hypoallergenic"
  | "Gentle"
  | "Cute"
  | "Protective"
  | "Intelligent";

export type Pet = {
  id: string;
  name: string;
  breed: string;
  ageLabel: string;
  ageMonths: number;
  gender: PetGender;
  type: PetType;
  image: string;
  tags: PetTag[];
};

export const PETS: Pet[] = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    ageLabel: "2 years",
    ageMonths: 24,
    gender: "Male",
    type: "Dog",
    image: "🐕",
    tags: ["Playful", "Good with Kids"],
  },
  {
    id: "2",
    name: "Luna",
    breed: "Siamese",
    ageLabel: "1 year",
    ageMonths: 12,
    gender: "Female",
    type: "Cat",
    image: "🐈",
    tags: ["Quiet", "Indoor"],
  },
  {
    id: "3",
    name: "Rocky",
    breed: "French Bulldog",
    ageLabel: "3 years",
    ageMonths: 36,
    gender: "Male",
    type: "Dog",
    image: "🐕‍🦺",
    tags: ["Loyal", "Chill"],
  },
  {
    id: "4",
    name: "Bella",
    breed: "Tabby",
    ageLabel: "6 months",
    ageMonths: 6,
    gender: "Female",
    type: "Cat",
    image: "🐱",
    tags: ["Curious", "Playful"],
  },
  {
    id: "5",
    name: "Charlie",
    breed: "Beagle",
    ageLabel: "4 years",
    ageMonths: 48,
    gender: "Male",
    type: "Dog",
    image: "🐶",
    tags: ["Energetic", "Friendly"],
  },
  {
    id: "6",
    name: "Coco",
    breed: "Poodle",
    ageLabel: "2 years",
    ageMonths: 24,
    gender: "Female",
    type: "Dog",
    image: "🐩",
    tags: ["Smart", "Hypoallergenic"],
  },
  {
    id: "7",
    name: "Thumper",
    breed: "Holland Lop",
    ageLabel: "1 year",
    ageMonths: 12,
    gender: "Male",
    type: "Small Pet",
    image: "🐰",
    tags: ["Gentle", "Cute"],
  },
  {
    id: "8",
    name: "Max",
    breed: "German Shepherd",
    ageLabel: "5 years",
    ageMonths: 60,
    gender: "Male",
    type: "Dog",
    image: "🐕",
    tags: ["Protective", "Intelligent"],
  },
];

export const PET_FILTERS: Array<"All" | PetType> = ["All", "Dog", "Cat", "Small Pet"];