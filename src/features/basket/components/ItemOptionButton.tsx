import { FC } from "react";
import styles from "../Basket.module.css";

export const ItemOptionButton: FC<{
  productId: string;
  description: string;
  onClick: () => void;
}> = function ({ productId, description, onClick }) {
  return (
    <button
      key={`item-option-button-${productId}`}
      className={styles.card}
      onClick={onClick}
      aria-label="Add to basket"
    >
      <h2>
        {productId} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </button>
  );
};
