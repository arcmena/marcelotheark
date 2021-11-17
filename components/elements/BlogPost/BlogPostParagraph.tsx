import styled, { css } from 'styled-components'

const BlogPostParagraph = styled.p(
  ({ theme: { fonts, spacing } }) => css`
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.sizes.base};
    line-height: 24px;

    & + p {
      margin-top: ${spacing[6]};
    }
  `
)

export default BlogPostParagraph
