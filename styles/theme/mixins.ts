import { GRADIENTS } from '../../constants/urls'

const mixins = Object.freeze({
  primaryGradient: 'background: linear-gradient(to right, #6417CB, #74C6FA);',
  textPrimaryGradient:
    'background: linear-gradient(to right, #6417CB, #74C6FA); background: -webkit-gradient(linear, left middle, left middle, from(#6417cb), to(#74c6fa) ); background-clip: text; -webkit-text-fill-color: transparent; -webkit-background-clip: text;',
  borderPrimaryGradient: `border-style: solid; border-image: url(${GRADIENTS.BORDER_GRADIENT}); border-image-slice: 2;`
})

export { mixins }
