import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../utils/breakpointsMedia';
import propToStyle from '../../../utils/propToStyle';
import { TextStyleVariants } from '../Text/styles';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button` 
  border: 0;
  cursor: pointer;
  font-weight: normal;
  opacity: 1;
  border-radius: 8px;

  ${breakpointsMedia({
    xs: css`
      padding: 12px 26px;
      ${TextStyleVariants.paragraphXS}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph}
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
  
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;