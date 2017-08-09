import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import { required, email } from '../../utils/validations';

import { TextField } from 'components';

/**
 * Simple login form
 */
class LoginForm extends PureComponent {
  render() {
    const { onFormSubmit, isAuthenticating, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>

        <div>
          <Field
            name="email"
            component={TextField}
            type="email"
            label="Email"
            validate={[required, email]}
          />
        </div>

        <div>
          <Field
            name="password"
            component={TextField}
            type="password"
            label="Password"
            validate={required}
          />
        </div>

        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>

        {isAuthenticating &&
          <p>Authenticating user. Please wait...</p>
        }

      </form>
    );
  }
}

LoginForm.propTypes = {
  /** Callback to be run when form submits */
  onFormSubmit: PropTypes.func.isRequired,
  /** Indicator if form is authenticating */
  isAuthenticating: PropTypes.bool,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
