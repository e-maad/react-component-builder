import React from 'react';
import ChildrenComponent from '../ChildrenComponent';


const wrapper = shallow(<ChildrenComponent children={{
    Headline: {
        Content: {
            type: "H1Component",
            props: {
                "text": "Our benefits"
            }
        }
    }
}} />);

describe('Children Component', () => {

    it('match the snapshot', () => {
        const wrapper = renderer.create(<ChildrenComponent />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('base element should be present', () => {
        expect(wrapper.html().includes('heading1-component')).toBe(true);
    });
});