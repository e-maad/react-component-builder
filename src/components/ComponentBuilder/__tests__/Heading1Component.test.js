import React from 'react';
import Heading1Component from '../Heading1Component';


const wrapper = shallow(<Heading1Component />);
describe('Heading1 Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<Heading1Component />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.heading1-component').length).toBe(1);
  });
});