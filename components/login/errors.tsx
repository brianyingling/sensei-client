import React from 'react';

const Message = ({ message }) => <div>{message}</div>

const Errors = ({ errors }) => {
  if (!errors || !errors.length) {
    return null;
  }
  return (
    <div className="pa2 mv3 bg-dark-red white">
      {errors.map(Message)}
    </div>
  )
}

export default Errors;