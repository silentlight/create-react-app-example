import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TextField from './TextField';

const createComponent = (props) => {
  return shallow(<TextField {...props} />);
};

describe('TextField', () => {

  const props = {
    input: {
      name: 'Test',
    },
    label: 'Test field',
    meta: {
      touched: false,
      error: null,
      warning: null,
    }
  };

  let component = createComponent(props);

  it('renders and matches the snapshot', () => {
    const tree = renderer.create(<TextField {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has label', () => {
    expect(component.find('label').text()).toEqual(props.label);
  });

  it('has correct default type', () => {
    expect(component.find('input').prop('type')).toEqual('text');
  });

  it('has correct explicit type', () => {
    props.type = 'password';

    component = createComponent(props);

    expect(component.find('input').prop('type')).toEqual(props.type);
  });

  it('displays warning', () => {
    props.meta.touched = true;
    props.meta.warning = 'Warning exemple';

    component = createComponent(props);

    expect(component.html()).toContain(props.meta.warning);
  });

  it('displays error', () => {
    props.meta.touched = true;
    props.meta.error = 'Error exemple';

    component = createComponent(props);

    expect(component.html()).toContain(props.meta.error);
  });
});