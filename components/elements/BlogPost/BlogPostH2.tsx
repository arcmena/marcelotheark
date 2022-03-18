import styled, { css } from 'styled-components'

const BlogPostH2 = styled.h2(
  ({ theme: { fonts, spacing } }) => css`
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.sizes['3xl']};
    line-height: 22px;

    margin: ${spacing[6]} 0;
  `
)

export default BlogPostH2
