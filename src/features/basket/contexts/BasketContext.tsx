"use client";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { BasketItems } from "../types/basket.types";

interface BasketContextValue {
  items: BasketItems;
  addToBasket: (productId: string) => void;
  removeFromBasket: (productId: string) => void;
  incrementQuantity: (productId: string, quantity: number) => void;
  clearBasket: () => void;
}

export const BasketContext = createContext<BasketContextValue | null>(null);

export const BasketContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<BasketItems>({});

  const addToBasket = (productId: string) => {
    setItems((prevValue) => {
      const existingItem = prevValue[productId];

      const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

      const updatedItems = {
        ...items,
        [productId]: { productId, quantity: newQuantity },
      };

      return updatedItems;
    });
  };

  const removeFromBasket = (productId: string) => {
    setItems((prevValue) => {
      const { [productId]: existingProduct, ...remainingItems } = prevValue;

      return remainingItems;
    });
  };

  const incrementQuantity = (productId: string, quantity: number) => {
    setItems((prevValue) => {
      const existingItem = prevValue[productId];

      if (!existingItem) {
        console.error(`Product ID: ${productId} not found in basket`);

        return prevValue;
      }

      const newQuantity = existingItem
        ? Math.max(0, existingItem.quantity + quantity)
        : 1;

      if (newQuantity === 0) {
        const { [productId]: existingProduct, ...remainingItems } = prevValue;

        return remainingItems;
      }

      const updatedItems = {
        ...items,
        [productId]: { productId, quantity: newQuantity },
      };

      return updatedItems;
    });
  };

  const clearBasket = () => {
    setItems({});
  };

  return (
    <BasketContext.Provider
      value={{
        items,
        addToBasket,
        removeFromBasket,
        incrementQuantity,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
