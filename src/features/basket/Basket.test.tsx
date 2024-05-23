import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Basket from "./Basket";
import { BasketContextProvider } from "./contexts/BasketContext";

const TestComponent = async () => {
  const BasketComponent = await Basket();
  return <BasketContextProvider>{BasketComponent}</BasketContextProvider>;
};

describe("Basket", () => {
  it("should display initial basket and product list", async () => {
    render(await TestComponent());

    expect(screen.getByText("Basket: 0 items")).toBeVisible();
    expect(screen.getByText("Item 1")).toBeVisible();
    expect(screen.getByText("Item 2")).toBeVisible();
    expect(screen.getByText("Item 3")).toBeVisible();
    expect(screen.getByText("Item 4")).toBeVisible();
  });
  it("should update basket when an item is added", async () => {
    render(await TestComponent());

    screen.getByText("Item 1").click();

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Basket: 0 items")
    );

    expect(screen.getByText("Item 1 count:")).toBeVisible();
    expect(screen.getByText("Basket: 1 item")).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByLabelText("Increase quantity")).toBeVisible();
    expect(screen.getByLabelText("Decrease quantity")).toBeVisible();

    screen.getByText("Item 4").click();
    screen.getByText("Item 4").click();

    await waitForElementToBeRemoved(() => screen.queryByText("Basket: 1 item"));

    expect(screen.getByText("Item 1 count:")).toBeVisible();
    expect(screen.getByText("Item 4 count:")).toBeVisible();
    expect(screen.getByText("Basket: 3 items")).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText("2")).toBeVisible();
  });
  it("should update basket when an item quantity is changed", async () => {
    render(await TestComponent());

    screen.getByText("Item 1").click();

    const increaseQuantityButton = await screen.findByLabelText(
      "Increase quantity"
    );

    increaseQuantityButton.click();

    expect(await screen.findByText("2")).toBeVisible();
    expect(screen.getByText("Basket: 2 items")).toBeVisible();

    const decreaseQuantityButton = screen.getByLabelText("Decrease quantity");

    decreaseQuantityButton.click();

    expect(await screen.findByText("1")).toBeVisible();
    expect(screen.getByText("Basket: 1 item")).toBeVisible();

    decreaseQuantityButton.click();

    expect(await screen.findByText("Basket: 0 items")).toBeVisible();
    expect(screen.queryByText("Item 1 count:")).toBeNull();
  });
});
