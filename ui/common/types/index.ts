// Type representing different breakpoint sizes
export type BreakpointTypes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type Shelter = {
  id: number;
  name: string;
  location: string;
  phone: number;
  email: string;
  imageUrl: string;
  description: string;
  story: string;
};

export type Pet = {
  _id: string;
  shelterId: Shelter;
  name: string;
  photo: string;
  age: number;
  animal: string;
  breed: string;
  sex: string;
  adopted: boolean;
  story: string;
};
