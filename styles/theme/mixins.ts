import { GRADIENTS } from '../../constants/urls'

const mixins = Object.freeze({
  primaryGradient: 'background: linear-gradient(to right, #6417CB, #74C6FA);',
  primaryGradientToTop: 'background: linear-gradient(to top,#6417CB,#74C6FA);',
  backgroundLowOpacity:
    'background: linear-gradient(to right, rgba(100, 23, 203, 0.3), rgba(116, 198, 250, 0.3));',
  textPrimaryGradient:
    'background: linear-gradient(to right, #6417CB, #74C6FA); background: -webkit-gradient(linear, left middle, left middle, from(#6417cb), to(#74c6fa) ); background-clip: text; -webkit-text-fill-color: transparent; -webkit-background-clip: text;',
  borderPrimaryGradient: `
    border-image: url(${GRADIENTS.BORDER_GRADIENT}); 
    border-image-source: url(${GRADIENTS.BORDER_GRADIENT}); 
    border-image-slice: 4; 
    border-style: solid; 
    border-width: 1px;
    border-radius: 4px;
  `,
  gradientPrimaryToTransparent:
    'background: linear-gradient(to right, #6417CB, rgba(100, 23, 203, 0));'
})

export { mixins }
