import styled, { css } from "styled-components";

export const IntroductionContainer = styled.div(() => css``);


export const ExperienceHistoryContainer = styled.section(
    ({ theme: { fonts, colors, spacing } }) => css`
      margin-top: ${spacing[6]};
  
      p {
        color: ${colors.light};
        font-size: ${fonts.sizes.base};
        font-weight: ${fonts.weight.normal};
        line-height: 130.5%;
      }
    `
  )
