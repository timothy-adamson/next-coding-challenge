"use client";
import { FC } from "react";
import styles from "./BasketSummary.module.css";
import { useBasketContext } from "../../hooks/useBasketContext";
import { getItemCount } from "../../utils/getItemCount";
import { Product } from "../../types/basket.types";

export const BasketSummary: FC<{ itemOptions: Product[] }> = ({
  itemOptions,
}) => {
  const { items } = useBasketContext();

  const itemCount = getItemCount(items);

  return (
    <div className={styles["basket-summary"]}>
      <button>Basket: {itemCount} items</button>
      <ul>
        {itemOptions &&
          itemOptions.map(({ productId }) => (
            <li key={`item-count-${productId}`}>
              <span>
                {productId} count: {items[productId]?.quantity || 0}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BasketSummary;
