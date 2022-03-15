import styled, { css } from "styled-components";

export default styled.h2.attrs({ className: 'sectionTitle' })(({ theme: { fonts } }) => css`
    font-size: ${fonts.sizes['4xl']};
    font-weight: ${fonts.weight.semibold};
`)