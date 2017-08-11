import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import configureStore from 'config/initializers/store';

import App from './App';

const initialStore = {};
const store = configureStore(initialStore);

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
      , div);
  });

  it('displays authenticated layout', () => {
    const component = shallow(
      <App authenticated={true}/>
    );

    expect(component.find('AuthenticatedLayout').length).toEqual(1);
    expect(component.find('PublicLayout').length).toEqual(0);
  })

  it('displays public layout', () => {
    const component = shallow(
      <App authenticated={false}/>
    );

    expect(component.find('AuthenticatedLayout').length).toEqual(0);
    expect(component.find('PublicLayout').length).toEqual(1);
  })
});
