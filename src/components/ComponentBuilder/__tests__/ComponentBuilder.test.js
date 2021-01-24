import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import ChildrenComponent from '../ChildrenComponent';
import ComponentBuilder from '../ComponentBuilder';
import configureStore from 'redux-mock-store';

describe('Component Builder Component', () => {

    const mockStore = configureStore([]);
    
    it('match the snapshot', () => {
        const wrapper = renderer.create(<ChildrenComponent />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('must verify the H1 component', () => {
        expect(shallow(<ComponentBuilder component={{
            Content: {
                type: "H1Component",
                props: {
                    "text": "Our benefits"
                }
            }

        }} />).html().includes('heading1-component')).toBe(true);
    });

    it('must verify the H2 component', () => {
        expect(shallow(<ComponentBuilder component={{
            Content: {
                type: "H2Component",
                props: {
                    "text": "Our benefits"
                }
            }

        }} />).html().includes('heading2-component')).toBe(true);
    });

    it('must verify the paragraph component', () => {
        expect(shallow(<ComponentBuilder component={{
            Content: {
                type: "ParagraphComponent",
                props: {
                    "text": "Our benefits"
                }
            }

        }} />).html().includes('paragraph-component')).toBe(true);
    });

    it('must verify the list component', () => {
        expect(shallow(<ComponentBuilder component={{
            Content: {
                type: "ListComponent",
                props: {
                    "li": [
                        "free to use",
                        "superfast",
                        "and pretty, too!"
                    ]
                }
            }

        }} />).html().includes('list-component')).toBe(true);
    });

    it('must verify the button component', () => {
        const store = mockStore({});
        expect(shallow(<Provider store={store}><ComponentBuilder component={{
            Content: {
                type: "ButtonComponent",
                props: {
                    "text": "Click me"
                }
            }

        }} /></Provider>).html().includes('button-component')).toBe(true);
    });

    it('must verify the link component', () => {
        const store = mockStore({});
        expect(shallow(<Provider store={store}><ComponentBuilder component={{
            Content: {
                type: "LinkComponent",
                props: {
                    "text": "Click me"
                }
            }

        }} /></Provider>).html().includes('link-component')).toBe(true);
    });

    it('must verify the box component', () => {
        expect(shallow(<ComponentBuilder component={{
            Content: {
                type: "BoxComponent",
                props: {
                    "borderSize": "7px"
                }
            }

        }} />).html().includes('box-component')).toBe(true);
    });

});