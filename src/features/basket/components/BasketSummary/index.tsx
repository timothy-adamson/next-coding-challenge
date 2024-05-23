"use client";
import { FC, useMemo } from "react";
import styles from "./BasketSummary.module.css";
import { useBasketContext } from "../../hooks/useBasketContext";
import { getItemCount } from "../../utils/getItemCount";
import { Product } from "../../types/basket.types";
import QuantityControl from "../QuantityControl";

export const BasketSummary: FC<{ itemOptions: Product[] }> = ({
  itemOptions,
}) => {
  const { items, incrementQuantity } = useBasketContext();

  const itemCount = getItemCount(items);

  const basketValues = useMemo(() => Object.values(items), [items]);

  return (
    <div className={styles["basket-summary"]}>
      <h3>{`Basket: ${itemCount} item${itemCount === 1 ? "" : "s"}`}</h3>
      <ul>
        {basketValues.map(({ productId, quantity }) => (
          <li key={`item-count-${productId}`}>
            <span>{productId} count:</span>

            <QuantityControl
              value={quantity || 0}
              onIncrease={() => incrementQuantity(productId, 1)}
              onDecrease={() => incrementQuantity(productId, -1)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketSummary;
