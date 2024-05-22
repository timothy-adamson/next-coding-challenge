"use client";
import { FC, ReactNode, createContext, useState } from "react";
import { BasketItems } from "../types/basket.types";

interface BasketContextValue {
  items: BasketItems;
  addToBasket: (productId: string) => BasketItems;
  removeFromBasket: (productId: string) => BasketItems;
  incrementQuantity: (
    productId: string,
    quantity: number
  ) => BasketItems | void;
  clearBasket: () => BasketItems;
}

export const BasketContext = createContext<BasketContextValue | null>(null);

export const BasketContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<BasketItems>({});

  const addToBasket = (productId: string) => {
    const existingItem = items[productId];

    const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

    const updatedItems = {
      ...items,
      [productId]: { productId, quantity: newQuantity },
    };

    setItems(updatedItems);

    return updatedItems;
  };

  const removeFromBasket = (productId: string) => {
    const updatedItems = items;

    delete updatedItems[productId];

    setItems(updatedItems);

    return updatedItems;
  };

  const incrementQuantity = (productId: string, quantity: number) => {
    const existingItem = items[productId];

    if (!existingItem) {
      console.error(`Product ID: ${productId} not found in basket`);

      return;
    }

    const newQuantity = existingItem
      ? Math.max(0, existingItem.quantity + quantity)
      : 1;

    if (newQuantity === 0) {
      return removeFromBasket(productId);
    }

    const updatedItems = {
      ...items,
      [productId]: { productId, quantity: newQuantity },
    };

    setItems(updatedItems);

    return updatedItems;
  };

  const clearBasket = () => {
    setItems({});

    return {};
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
