import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Header } from './Header';

describe('Header', () => {

  const defaultProps = {
    authenticated: true,
    logout: jest.fn(),
  };

  let component, props;

  const createComponent = (overrides = {}) => {
    props = Object.assign({}, defaultProps, overrides);

    return shallow(
      <Header {...props } />
    );
  };

  it('renders and matches the snapshot', () => {
    const tree = renderer.create(<Header {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('authenticated prop set to true', () => {

    beforeEach(() => {
      component = createComponent({ authenticated: true });
    });

    it('show authenticated menu when true', () => {
      expect(component.find('li').length).toEqual(3);
    });

  });

  describe('authenticated prop set to false', () => {

    beforeEach(() => {
      component = createComponent({ authenticated: false });
    });

    it('show public menu when false', () => {
      expect(component.html()).toContain('Home');
      expect(component.html()).toContain('Login');
    });

  });

  describe('logout prop', () => {

    beforeEach(() => {
      component = createComponent({ authenticated: true });
    });

    it('logout is called when logout button is clicked', () => {
      component.find('NavLink').last().simulate('click');
      expect(props.logout.mock.calls.length).toEqual(1);
    });

  });

});