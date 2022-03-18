import styled, { css } from 'styled-components'

export const BlogPostCardTitle = styled.h4(
  ({ theme: { fonts } }) => css`
    font-size: ${fonts.sizes.xl};
    font-weight: ${fonts.weight.medium};
  `
)

export const BlogPostCardDate = styled.h4(
  ({ theme: { spacing, fonts, colors } }) => css`
    margin-top: ${spacing[3]};

    color: ${colors.gray};
    font-size: ${fonts.sizes.base};
    font-weight: ${fonts.weight.normal};
  `
)

export const BlogPostCardShortDescription = styled.h4(
  ({ theme: { spacing, fonts } }) => css`
    margin-top: ${spacing[4]};

    font-size: ${fonts.sizes.base};
    font-weight: ${fonts.weight.normal};
  `
)