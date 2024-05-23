import { FC } from "react";
import PlusIcon from "../PlusIcon";
import MinusIcon from "../MinusIcon";
import styles from "./QuantityControl.module.css";

interface QuantityControlProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityControl: FC<QuantityControlProps> = ({
  value,
  onIncrease,
  onDecrease,
}) => {
  return (
    <span className={styles["quantity-control"]}>
      <button aria-label="Increase quantity" onClick={() => onIncrease()}>
        <PlusIcon />
      </button>
      <span>{value}</span>
      <button aria-label="Decrease quantity" onClick={() => onDecrease()}>
        <MinusIcon />
      </button>
    </span>
  );
};

export default QuantityControl;
