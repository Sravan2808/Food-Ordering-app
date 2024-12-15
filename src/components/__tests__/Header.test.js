import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../..utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Assertion

  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Assertion

  const CartItems = screen.getByText("Cart -(0 items)");
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Assertion

  const CartItems = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});

it("Should change Login button to Logout on yhe click  ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Assertion

  const loginButton = screen.getByText("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByText("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
