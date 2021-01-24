import React from 'react';
import BoxComponent from '../BoxComponent';


const wrapper = shallow(<BoxComponent />);
describe('Box Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<BoxComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.box-component').length).toBe(1);
  });
});