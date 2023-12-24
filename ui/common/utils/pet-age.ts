export const getAgeText = (age: number) => {
  if (age <= 3) {
    return "Young";
  }
  if (age <= 7) {
    return "Adult";
  }
  return "Senior";
};
