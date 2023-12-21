import { render, screen } from "@testing-library/react";
import Heading from "../Heading";

test("renders heading section", () => {
  const someTitle = "Some Title";

  render(<Heading title={someTitle} />);

  const actualTitle = screen.getByText(someTitle);
  expect(actualTitle).toBeInTheDocument();
});
