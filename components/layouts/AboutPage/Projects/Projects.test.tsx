import { screen } from "@testing-library/react";

import { setup } from "utils/tests";

import Projects from ".";

describe(Projects, () => {
  const { render } = setup(Projects);

  describe("Rendering", () => {
    it("should render the <Projects> component", () => {
      render();
      expect(screen.getByTestId("Projects")).toBeInTheDocument();
    });
  });
});
