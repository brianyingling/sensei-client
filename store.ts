import withRedux from 'next-redux-wrapper';
import createStore from 'bundles'

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

// const makeStore = context => createStore();


export const wrapper = withRedux(createStore, { debug: true });
// export const wrapper = createWrapper(createStore, { debug: true });
