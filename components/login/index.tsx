import debounce from 'lodash/debounce';
import Login from './login';
import { connect } from 'redux-bundler-react'

const render = ({
  doSubmit,
  doUpdateField,
  loginErrors: errors
}) => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doSubmit();
    // doUpdateSessionId('blah');
  }

  const onChangeEmailField = (e: React.ChangeEvent<HTMLInputElement>) => (
    doUpdateField('email', e.target.value)
  );

  const onChangePasswordField = (e: React.ChangeEvent<HTMLInputElement>) => (
    doUpdateField('password', e.target.value)
  );

  return (
    <Login
      errors={errors}
      onChangeEmailField={onChangeEmailField}
      onChangePasswordField={onChangePasswordField}
      onSubmit={onSubmit}
    />
  )
};

export default connect(
  'doSubmit',
  'doUpdateField',
  'selectLoginErrors',
  render
);