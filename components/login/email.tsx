import React from 'react';

const Email = ({ onChange }) => (
  <div className="mt3">
    <label className="db fw6 lh-copy f6" htmlFor="email-address">
      Email
    </label>
    <input
      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      onChange={onChange}
      type="email"
      name="email-address"
      id="email-address"
    />
  </div>
);

export default Email;