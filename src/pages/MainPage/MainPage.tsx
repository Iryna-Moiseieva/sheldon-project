import React, { useState } from 'react';

import Modal from '../../components/Modal';

import {
  StyledMainPage,
  Form,
  Title,
  Wrapper,
  List,
  Item,
  Label,
  Input,
  Text,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
  StartLosingWeightBtn
} from './MainPage.styles';

interface MainPageProps {
  onSubmit: () => void;
  currentTarget: {
    name: unknown;
    value: unknown;
  };
}

export const MainPage: React.FC<MainPageProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState(1);

  const handleInputChange = (event: { currentTarget: { name: any; value: any; }; }) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'currentWeight':
        setCurrentWeight(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      case 'bloodType':
        setBloodType(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit();
    setHeight('');
    setAge('');
    setCurrentWeight('');
    setDesiredWeight('');
    setBloodType(1);
    setIsOpen(true);

  };

  return (
    <StyledMainPage data-testid="main-page">
      <Form
        action="submit"
        onSubmit={handleSubmit}>
        <Title>Calculate your daily calorie intake right now</Title>
        <Wrapper>
          <List>
            <Item>
              <Label htmlFor="text">Height*
                <Input
                  type="height"
                  name="height"
                  placeholder="cm"
                  value={height}
                  onChange={handleInputChange}></Input>
              </Label>
            </Item>
            <Item>
              <Label htmlFor="text">Age *
                <Input
                  type="age"
                  name="age"
                  placeholder="years"
                  value={age}
                  onChange={handleInputChange}></Input>
              </Label>
            </Item>
            <Item>
              <Label htmlFor="text">Current weight *
                <Input
                  type="currentWeight"
                  name="currentWeight"
                  placeholder="kg"
                  value={currentWeight}
                  onChange={handleInputChange}></Input>
              </Label>
            </Item>
          </List>
          <List>
            <Item>
              <Label htmlFor="text">Desired weight *
                <Input
                  type="desiredWeight"
                  name="desiredWeight"
                  placeholder="kg"
                  value={desiredWeight}
                  onChange={handleInputChange}></Input>
              </Label>
            </Item>
            <Item>
              <Text>Blood type *</Text>
                <CheckboxContainer role="group" aria-label="my-radio-group">
                  <CheckboxLabel>
                  <Checkbox
                    type="radio"
                    name="bloodType"
                    value="1"
                    onChange={handleInputChange}/>1
                  </CheckboxLabel>
                  <CheckboxLabel>
                  <Checkbox
                    type="radio"
                    name="bloodType"
                    value="2"
                    onChange={handleInputChange}/>2
                  </CheckboxLabel>
                  <CheckboxLabel>
                  <Checkbox
                    type="radio"
                    name="bloodType"
                    value="3"
                    onChange={handleInputChange}/>3
                  </CheckboxLabel>
                  <CheckboxLabel>
                  <Checkbox
                    type="radio"
                    name="bloodType"
                    value="4"
                    onChange={handleInputChange}/>4
                  </CheckboxLabel>
                </CheckboxContainer>
            </Item>
          </List>
        </Wrapper>
      </Form>
      <StartLosingWeightBtn />
      {isOpen && (<Modal />)}
    </StyledMainPage>
  );
};

export default MainPage;
