import React from 'react';
import ModalComponent from '../ModalComponent';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('Modal Component', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(
      <Provider store={store}>
        <ModalComponent isOpen={true} />
      </Provider>
    );
  });

  it('match the snapshot', () => {
    expect(renderer.create(<Provider store={store}>
      <ModalComponent isOpen={true} />
    </Provider>).toJSON()).toMatchSnapshot();
  });

  it('base element should be present', () => {
    expect(wrapper.html().includes("modal-component")).toBe(true);
  });
});