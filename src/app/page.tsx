import { BasketContextProvider } from "@/features/basket/contexts/BasketContext";
import Basket from "@/features/basket/Basket";

export default function Home() {
  return (
    <BasketContextProvider>
      <Basket />
    </BasketContextProvider>
  );
}
