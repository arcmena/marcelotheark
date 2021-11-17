import styled, { css } from 'styled-components'

const BlogPostH1 = styled.h2(
  ({ theme: { fonts, spacing } }) => css`
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.sizes['2xl']};
    line-height: 22px;

    margin: ${spacing[6]} 0 ${spacing[2]};
  `
)

export default BlogPostH1
