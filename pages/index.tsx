import React from 'react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { END } from 'redux-saga';

import wrapper, { SagaStore } from '../src/redux/store';
import { Creators as AppCreators } from '../src/redux/reducers/app';

import List, { ListProps } from '../src/components/List';

const Home = ({ list }: { list: ListProps }) => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <List list={list} />
    </main>

    <footer />
  </div>
);

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store, res }) => {
    store.dispatch(AppCreators.initializeAppRequest());

    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();

    const list = store.getState().app.data;

    return {
      props: {
        error: {
          statusCode: res.statusCode,
        },
        list,
      },
    };
  }
);

export default Home;
