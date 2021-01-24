import React from 'react';
import LinkComponent from '../LinkComponent';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const mockStore = configureStore([]);

describe('Link Component', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(
      <Provider store={store}>
        <LinkComponent />
      </Provider>
    );
  });

  it('match the snapshot', () => {
    expect(renderer.create(<Provider store={store}>
      <LinkComponent />
    </Provider>).toJSON()).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.html().includes('link-component')).toBe(true);
  });
});