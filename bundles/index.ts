import { composeBundles } from 'redux-bundler';
import { bundle as sessionBundle } from './session';
import { bundle as formBundle } from './form';
// import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case HYDRATE: {
//       return { ...state, ...action.payload }
//     }
//     case 'TICK': {
//       return { ...state, tick: action.payload }
//     }
//     default: {
//       return state;
//     }
//   }
// }

// const storeBundle = {
//   // reducer
// }

export default composeBundles(
  formBundle,
  sessionBundle,
  // storeBundle
);
