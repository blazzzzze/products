import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import { ValueInput } from './ValueInput';

Enzyme.configure({ adapter: new Adapter() });

test("Render 3 valueInput", () => {
    const wrapper = shallow(<App />); //arrange
    console.log(wrapper.html());
    const valCount = wrapper.find(ValueInput).length; //act
    expect(valCount).toBe(3); //assert
});