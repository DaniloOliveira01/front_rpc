import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeLayout } from '../template/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RPCINE</title>
      </Head>
      <HomeLayout />
    </>
  )
}

export default Home
