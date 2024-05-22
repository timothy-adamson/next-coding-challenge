"use client";
import styles from "./Basket.module.css";
import { useBasketContext } from "./hooks/useBasketContext";
import { getItemCount } from "./utils/getItemCount";
import { ItemCount } from "./components/ItemCount";
import { itemDescriptions } from "./config/itemDescriptions";
import { ItemOptionButton } from "./components/ItemOptionButton";

export default function Basket() {
  const { items, addToBasket } = useBasketContext();

  const itemOptions = Object.entries(itemDescriptions).map(
    ([productId, description]) => ({
      productId,
      description,
    })
  );

  const itemCount = getItemCount(items);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>Michael&apos;s Amazing Web Store</p> */}
        <div>
          <button className={styles.basket}>Basket: {itemCount} items</button>
          {itemOptions.map(({ productId }) => (
            <ItemCount
              key={`item-count-${productId}`}
              name={productId}
              count={items[productId]?.quantity || 0}
            />
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {itemOptions.map(({ productId, description }) => (
          <ItemOptionButton
            productId={productId}
            description={description}
            onClick={() => addToBasket(productId)}
          />
        ))}
      </div>
    </main>
  );
}
