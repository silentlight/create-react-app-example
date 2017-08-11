import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextField extends PureComponent {
  render() {
    const { input, meta: { touched, error, warning } } = this.props;
    const { label, type } = this.props;

    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
          ((error &&
          <p className="warning">
            {error}
          </p>) ||
          (warning &&
          <p className="error">
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
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
};

TextField.defaultProps = {
  type: 'text'
};

export default TextField;
