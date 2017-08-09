import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextField extends PureComponent {
  render() {
    const {input, label, type, meta: { touched, error, warning }} = this.props;

    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
          ((error &&
          <p>
            {error}
          </p>) ||
          (warning &&
          <p>
            {warning}
          </p>))}
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  type: 'text'
};

export default TextField;
