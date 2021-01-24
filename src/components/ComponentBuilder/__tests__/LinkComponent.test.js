import React from 'react';
import LinkComponent from '../LinkComponent';


const wrapper = shallow(<LinkComponent />);
describe('Link Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<LinkComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.link-component').length).toBe(1);
  });
});