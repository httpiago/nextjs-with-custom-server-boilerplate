import React from 'react'
import { NextPage } from 'next'
import Header from '../components/Header'

const HomePage: NextPage = ({}) => {
  return (
    <>
      <Header title="Main page" />
      <main>Hello World!</main>
    </>
  );
}

export default HomePage
