import styled, { css } from 'styled-components'

export const BlogPostCardTitle = styled.h1(
  ({ theme: { fonts, spacing } }) => css`
    font-size: ${fonts.sizes.lg};
    font-weight: ${fonts.weight.medium};
    letter-spacing: .8px;
  `
)

export const BlogPostCardDate = styled.time(
  ({ theme: { spacing, fonts, colors } }) => css`
    display: block;
    margin-top: ${spacing[2]};

    color: ${colors.gray};
    font-size: ${fonts.sizes.sm};
    font-weight: ${fonts.weight.normal};
    letter-spacing: .8px;
  `
)

export const BlogPostCardShortDescription = styled.p(
  ({ theme: { spacing, fonts } }) => css`
    margin-top: ${spacing[3]};
    
    font-size: ${fonts.sizes.sm};
    font-weight: ${fonts.weight.normal};
    line-height: ${spacing[4]};
    letter-spacing: .3px;
  `
)
