import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ButtonComponent from '../ButtonComponent';
import { shallow } from 'enzyme';

const mockStore = configureStore([]);

describe('Button Component', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(
      <Provider store={store}>
        <ButtonComponent />
      </Provider>
    );
  });

  it('match the snapshot', () => {
    expect(renderer.create(<Provider store={store}>
      <ButtonComponent />
    </Provider>).toJSON()).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.html().includes('button-component')).toBe(true);
  });
});