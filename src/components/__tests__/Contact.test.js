import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// it and test are same thing wecan write test also

describe("Contact US Page Test Case", () => {
  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //   Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    //   Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Shoud load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes);

    // Assertion
    expect(inputBoxes.length).not.toBe(3);
  });
});
