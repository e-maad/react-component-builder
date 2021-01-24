import React from 'react';
import ListComponent from '../ListComponent';


const wrapper = shallow(<ListComponent li={[
    "free to use",
    "superfast",
    "and pretty, too!"
]} />);

describe('List Component', () => {

    it('match the snapshot', () => {
        const wrapper = renderer.create(<ListComponent />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('base element should be present', () => {
        expect(wrapper.find('.list-component').length).toBe(1);
    });
});