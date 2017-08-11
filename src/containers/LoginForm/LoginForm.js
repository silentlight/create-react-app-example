import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import { required, email } from 'utils/validations';

import { TextField } from 'components';

/**
 * Simple login form
 */
export class LoginForm extends PureComponent {

  render() {
    const { submitting, pristine, reset, handleSubmit } = this.props;
    const { authenticating } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <div>
          <Field
            name="email"
            component={TextField}
            validate={[required, email]}
            type="email"
            label="Email"
          />
        </div>

        <div>
          <Field
            name="password"
            component={TextField}
            validate={required}
            type="password"
            label="Password"
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

        {authenticating &&
        <p>Authenticating user. Please wait...</p>
        }

      </form>
    );
  }
}

LoginForm.propTypes = {
  /** Callback to be run when form submits */
  onSubmit: PropTypes.func.isRequired,
  /** Indicator if form is authenticating */
  authenticating: PropTypes.bool,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
