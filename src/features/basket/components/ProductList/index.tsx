"use client";
import { FC } from "react";
import styles from "./ProductList.module.css";
import { useBasketContext } from "../../hooks/useBasketContext";
import { Product } from "../../types/basket.types";

export const ProductList: FC<{ itemOptions: Product[] }> = ({
  itemOptions,
}) => {
  const { addToBasket } = useBasketContext();

  return (
    <div className={styles["product-grid"]}>
      {itemOptions.map(({ productId, description }) => (
        <button
          key={`item-option-button-${productId}`}
          className={styles["product-card"]}
          onClick={() => addToBasket(productId)}
          aria-label="Add to basket"
        >
          <h2>
            {productId} <span>-&gt;</span>
          </h2>
          <p>{description}</p>
        </button>
      ))}
    </div>
  );
};

export default ProductList;
