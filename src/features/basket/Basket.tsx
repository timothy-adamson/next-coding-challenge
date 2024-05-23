import styles from "./Basket.module.css";
import { Product } from "./types/basket.types";
import BasketSummary from "./components/BasketSummary";
import ProductList from "./components/ProductList";
import { BasketContextProvider } from "./contexts/BasketContext";
import { products } from "./config/products";

const getItemOptions = async () => {
  // Simulate an API call to get products
  const fakeApiCall = () =>
    new Promise<Product[]>((resolve) => {
      resolve(products);
    });

  return await fakeApiCall();
};

export const Basket = async () => {
  const products = await getItemOptions();

  return (
    <main className={styles.main}>
      <BasketContextProvider>
        <BasketSummary itemOptions={products} />
        <ProductList itemOptions={products} />
      </BasketContextProvider>
    </main>
  );
};

export default Basket;
