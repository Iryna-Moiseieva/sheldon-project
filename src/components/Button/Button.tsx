import { StyledButton } from './Button.styles';

export const Button = ({ text = 'Button', ...attrs }) => {
  return (
    <StyledButton {...attrs}>{text}</StyledButton>
  );
};

export default Button;



