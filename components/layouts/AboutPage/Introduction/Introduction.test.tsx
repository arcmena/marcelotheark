import { screen } from "@testing-library/react";

import { setup } from "utils/tests";

import Introduction from ".";

describe(Introduction, () => {
  const { render } = setup(Introduction);

  describe("Rendering", () => {
    it("should render the <Introduction> component", () => {
      render();
      expect(screen.getByTestId("Introduction")).toBeInTheDocument();
    });
  });
});
