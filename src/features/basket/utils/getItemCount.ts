import { BasketItems } from "../types/basket.types";

export const getItemCount = (items: BasketItems) => {
  let count = 0;

  Object.values(items).forEach(({ quantity }) => (count += quantity));

  return count;
};
