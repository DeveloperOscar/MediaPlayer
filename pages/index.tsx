import PlayList from 'components/molecules/play-list'
import MusicPlayer from 'components/organism/music-player'
import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className={"flex flex-column justify-center mt-10 items-center"}> 
      <Head>
        <title>Reproductor Multimedia App</title>
        <meta name="description" content="Reproductor multimedia sencillo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MusicPlayer/>
      <PlayList/>
    </div>
  )
}

export default Home
