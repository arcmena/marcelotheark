import { screen } from "@testing-library/react";

import { setup } from "utils/tests";

import RelatedBlogPosts from ".";

describe(RelatedBlogPosts, () => {
  const { render } = setup(RelatedBlogPosts);

  describe("Rendering", () => {
    it("should render the <RelatedBlogPosts> component", () => {
      render();
      expect(screen.getByTestId("RelatedBlogPosts")).toBeInTheDocument();
    });
  });
});
