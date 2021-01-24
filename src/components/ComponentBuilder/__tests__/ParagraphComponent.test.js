import React from 'react';
import ParagraphComponent from '../ParagraphComponent';


const wrapper = shallow(<ParagraphComponent isOpen={true} />);
describe('Paragraph Component', () => {

  it('match the snapshot', () => {
    const wrapper = renderer.create(<ParagraphComponent />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.find('.paragraph-component').length).toBe(1);
  });
});