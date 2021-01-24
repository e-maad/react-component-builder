import React from 'react';
import Heading2Component from '../Heading2Component';


const wrapper = shallow(<Heading2Component />);
describe('Heading2 Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<Heading2Component />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.heading2-component').length).toBe(1);
  });
});