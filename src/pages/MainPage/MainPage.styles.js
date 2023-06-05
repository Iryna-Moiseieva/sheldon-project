import styled from 'styled-components';

import Button from '../../components/Button';

export const StyledMainPage = styled.main`
  padding: 144px 0px 111px 16px;
`;

export const Form = styled.form`
  height: 343px;
  width: 608px;
`;

export const Title = styled.p`
  font-size: var(--font-size-500);
  line-height: 1.4;
  letter-spacing: 0em;
  margin-bottom: 68px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

export const Item = styled.li`
  &:not(:last-child) {
      margin-bottom: 40px;
    }
`;

export const Label = styled.label`
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--color-gray-100);
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 0px;
  border-bottom: 1px solid var(--color-gray-300);
  line-height: 1.14;

  color: var(--color-black);
  letter-spacing: 0.04em;
  background-color: transparent;

  &::placeholder {
    color: var(--color-gray-100);
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }
  &:hover,
  &:focus {
    &::placeholder {
      color: var(--color-orange);
    }
  }
`;

export const Text = styled.p`
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--color-gray-100);
  margin-bottom: 20px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding-top: 9px;
  border-top: 1px solid var(--color-gray-300);
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-weight: 400;
  color: var(--color-gray-100);
  margin-right: 28px;

  &:hover,
  &:focus {
    color: var(--color-orange);
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 4px;

  &:checked {
    appearance: none;
    border-radius: 50%;
    background: var(--color-orange);
    border: 5px solid var(--color-white);
    box-shadow: 0 0 0 1px var(--color-gray-100);
  }
`;

export const StartLosingWeightBtn = styled(Button).attrs({
  type: 'submit',
  text: 'Start losing weight'
})`
  height: 43px;
  width: 210px;
  margin-top: 60px;
  margin-left: 323px;
`;




