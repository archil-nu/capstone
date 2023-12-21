import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders little lemon app", () => {
  render(<App />);

  const littleLemonLogo = screen.queryAllByAltText(/little/i);
  expect(littleLemonLogo.length).toBeGreaterThanOrEqual(1);
});
