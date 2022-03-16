exports.component = name => `import { ${name}Container } from "./styles";

const ${name} = () => {
  return <${name}Container data-testid="${name}" />;
};

export default ${name};
`

exports.styles = name => `import styled, { css } from "styled-components";

export const ${name}Container = styled.div(() => css\`\`);
`

exports.test = name => `import { screen } from "@testing-library/react";

import { setup } from "utils/tests";

import ${name} from ".";

describe(${name}, () => {
  const { render } = setup(${name});

  describe("Rendering", () => {
    it("should render the <${name}> component", () => {
      render();
      expect(screen.getByTestId("${name}")).toBeInTheDocument();
    });
  });
});
`

exports.barrel = name => `export { default } from "./${name}";`
