import styled, { css } from 'styled-components'

export default styled.h2.attrs({ className: 'sectionTitle' })(
  ({ theme: { fonts } }) => css`
    font-size: ${fonts.sizes['3xl']};
    font-weight: ${fonts.weight.semibold};
    letter-spacing: 1px;
  `
)
