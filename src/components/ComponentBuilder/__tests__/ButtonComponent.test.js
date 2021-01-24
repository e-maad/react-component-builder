import React from 'react';
import ButtonComponent from '../ButtonComponent';


const wrapper = shallow(<ButtonComponent />);
describe('Button Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<ButtonComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.button-component').length).toBe(1);
  });
});