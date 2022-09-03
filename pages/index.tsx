import store from 'app/store'
import AppMediaPlayer from 'components/app'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Provider } from 'react-redux'


const Home: NextPage = () => {
  return (
    <div className={"flex flex-column justify-around p-2 md:py-10 items-center"}>
      <Head>
        <title>Reproductor Multimedia App</title>
        <meta name="description" content="Reproductor multimedia sencillo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <AppMediaPlayer/>
      </Provider>
    </div>
  )
}

export default Home
