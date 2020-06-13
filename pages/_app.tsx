import 'tachyons/css/tachyons.min.css';
// import { MakeStore, createWrapper } from 'next-redux-wrapper';
import React, { Fragment } from 'react';
import Head from 'next/head';
import App from 'next/app';

import { Provider } from 'redux-bundler-react'
import createStore from 'bundles'
import Style from './style';
import Nav from '../components/nav';
import { wrapper } from '../store';

const initialState = {};

// const store = createStore();

// const makeStore: MakeStore = context => createStore(initialState);

// const wrapper = createWrapper(makeStore, { debug: true });

// console.log('STORE:	', store);

// console.log('statezzz:', store.getState());

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			store: ctx.store,
			pageProps: {
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
			}
		}
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<div>
					<Head>
						<title>Sensei Client</title>
					</Head>
					<Style />
					<Nav />
					<main>
						<Component {...pageProps} />
					</main>
				</div>
			</Provider>
		)
	}
}

// const App = ({ Component, pageProps }): JSX.Element => (
// 	<div>
// 		<Head>
// 			<title>Sensei Client</title>
// 		</Head>
// 		<Style />
// 		<Nav />
// 		<main>
// 			<Component {...pageProps} />
// 		</main>
// 	</div>
// );

export default wrapper(MyApp);

