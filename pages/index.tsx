import AppMediaPlayer from 'components/AppMediaPlayer'
import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className={"flex flex-column justify-around py-10  items-center"}>
      <Head>
        <title>Reproductor Multimedia App</title>
        <meta name="description" content="Reproductor multimedia sencillo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppMediaPlayer/>
    </div>
  )
}

export default Home
