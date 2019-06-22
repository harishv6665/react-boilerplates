import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Counter debug />);

    expect(component).toMatchSnapshot();
  });
});