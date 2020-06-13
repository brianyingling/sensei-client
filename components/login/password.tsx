import React from 'react';

const Password = ({ onChange }) => (
  <div className="mv3">
    <label className="db fw6 lh-copy f6" htmlFor="password">
      Password
    </label>
    <input
      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      id="password"
      onChange={onChange}
      name="password"
      type="password"
    />
  </div>
);

export default Password;