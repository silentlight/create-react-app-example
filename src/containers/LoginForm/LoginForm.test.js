import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import configureStore from 'config/initializers/store';

import LoginForm from './LoginForm';

const store = configureStore({});

describe('LoginForm', () => {

  const defaultProps = {
    pristine: true,
    submitting: false,
    handleSubmit: jest.fn(),
    reset: jest.fn(),

    authenticating: false,
    onSubmit: jest.fn(),
  };

  let component, props;

  const createComponent = (overrides = {}) => {
    props = Object.assign({}, defaultProps, overrides);

    return mount(
      <Provider store={store}><LoginForm {...props} /></Provider>
    );
  };

  it('renders and matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><LoginForm {...defaultProps} /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('email field', () => {

    beforeEach(() => {
      component = createComponent();
    });

    it('is required', () => {
      component.find('[name="email"]').simulate('blur');
      expect(component.find('.warning').length).toEqual(1);
    });

    it('has to be valid email address', () => {
      component.find('input[name="email"]').simulate('change', { target: { value: 'test' } });
      component.find('[name="email"]').simulate('blur');
      expect(component.find('.warning').length).toEqual(1);

      component.find('input[name="email"]').simulate('change', { target: { value: 'test@test.com' } });
      expect(component.find('.warning').length).toEqual(0);
    });

  });

  describe('password field', () => {

    beforeEach(() => {
      component = createComponent();
    });

    it('is required', () => {
      component.find('[name="password"]').simulate('blur');
      expect(component.find('.warning').length).toEqual(1);
    })

  });

  describe('form submission', () => {

    beforeEach(() => {
      component = createComponent();
    });

    it("calls handleSubmit", () => {
      component.find('input[name="email"]').simulate('change', { target: { value: 'test@test.com' } });
      component.find('input[name="password"]').simulate('change', { target: { value: 'password' } });

      component.find('form').simulate('submit');

      expect(component.find('.warning').length).toEqual(0);
      expect(component.find('.error').length).toEqual(0);
      expect(props.handleSubmit.mock.calls.length).toEqual(1);
    })

  });

  describe('form reset', () => {

    beforeEach(() => {
      component = createComponent();
    });

    it("calls reset", () => {
      component.find('input[name="email"]').simulate('change', { target: { value: 'test@test.com' } });
      component.find('input[name="password"]').simulate('change', { target: { value: 'password' } });

      component.find('button[type="button"]').simulate('click');

      expect(component.find('input[name="email"]').prop('value')).toEqual('');
      expect(component.find('input[name="password"]').prop('value')).toEqual('');
    })

  });

  describe('authenticating prop', () => {

    beforeEach(() => {
      component = createComponent({ authenticating: true });
    });

    it("displays authentication text", () => {
      expect(component.html()).toContain('Authenticating user. Please wait...');
    })

  });

});