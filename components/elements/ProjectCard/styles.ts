import styled, { css } from 'styled-components'

import Card from '../Card'

type AlternateSideProps = {
  alternateSide: boolean
}

export const ProjectCardContainer = styled.div<AlternateSideProps>(
  ({ theme: { media }, alternateSide }) => css`
    ${media.md} {
      position: relative;

      ${alternateSide
        ? css`
            display: flex;
            justify-content: end;
          `
        : css``}

      .projectCover {
        border-radius: 15px;
      }
    }
  `
)

export const ProjectCardBody = styled(Card)<AlternateSideProps>(
  ({ theme: { media }, alternateSide }) => css`
    ${media.md} {
      position: absolute;
      width: 380px;

      ${alternateSide
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `}

      top: 50%;
      transform: translate(0, -50%);
    }
  `
)

export const ProjectCardHeader = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
  `
)

export const ProjectCardInfo = styled.div(() => css``)

export const ProjectCardTitle = styled.h3(
  ({ theme: { fonts } }) => css`
    font-size: ${fonts.sizes.xl};
    font-weight: ${fonts.weight.medium};
  `
)

export const ProjectCardLinks = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing[5]};
  `
)

export const ProjectCardCategory = styled.span(
  ({ theme: { colors, spacing, fonts } }) => css`
    display: block;

    font-size: ${fonts.sizes.base};
    color: ${colors.gray};

    margin-top: ${spacing[2]};
  `
)

export const ProjectCardDescription = styled.p(
  ({ theme: { fonts, spacing } }) => css`
    font-size: ${fonts.sizes.base};

    margin-top: ${spacing[3]};
    line-height: 120%;
  `
)

export const ProjectCardTechnologies = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[3]};

    display: flex;
  `
)

export const ProjectCardTechnologiesList = styled.ul(
  ({ theme: { spacing } }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    gap: ${spacing[5]};

    margin-left: ${spacing[2]};
  `
)

export const ProjectCardTechnology = styled.li(() => css``)
