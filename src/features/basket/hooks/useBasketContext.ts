import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";

export const useBasketContext = () => {
  const context = useContext(BasketContext);

  if (context === null) {
    throw new Error(
      "useBasketContext must be used within a BasketContextProvider."
    );
  }

  return context;
};
