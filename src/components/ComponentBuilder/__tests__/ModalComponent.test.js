import React from 'react';
import ModalComponent from '../ModalComponent';


const wrapper = shallow(<ModalComponent isOpen={true} />);
describe('Modal Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<ModalComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.modal-component').length).toBe(1);
  });
});