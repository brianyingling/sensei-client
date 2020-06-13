import React from 'react';
import Email from './email';
import Password from './password';
import Submit from './submit';
import Errors from './errors';

type InputEvent = (e: React.ChangeEvent<HTMLInputElement>) => void

type FormEvent = (e: React.FormEvent<HTMLFormElement>) => void

interface Error {
  message: string
}

interface LoginProps {
  errors: Array<Error>
  onChangeEmailField: InputEvent,
  onChangePasswordField: InputEvent,
  onSubmit: FormEvent
}

const Login = ({
  errors,
  onChangeEmailField,
  onChangePasswordField,
  onSubmit,
}: LoginProps): JSX.Element => (
    <form
      className="measure center"
      onSubmit={onSubmit}
    >
      <Errors errors={errors} />
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <Email
          onChange={onChangeEmailField}
        />
        <Password
          onChange={onChangePasswordField}
        />
      </fieldset>
      <Submit />
      <div className="lh-copy mt3">
        <a href="#0" className="f6 link dim black db">Sign up</a>
        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
      </div>
    </form >
  );

export default Login;