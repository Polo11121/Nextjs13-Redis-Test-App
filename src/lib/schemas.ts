import { Schema } from "redis-om";

export type Car = {
  make: string;
  model: string;
  image: string;
  description: string;
  entityId: string;
};

export const carSchema = new Schema(
  "car",
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "text" },
  },
  {
    dataStructure: "JSON",
  }
);
