import { setCurrentSoundId } from 'app/features/musicPlayerSlice'
import { selectSoundsTotal } from 'app/features/sounds/soundsSlice'
import {  useAppDispatch, useAppSelector } from 'app/hooks'
import DropAreaFiles from 'components/atoms/drop-area-files'
import MusicPlayer from 'components/organism/music-player'
import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  const total = useAppSelector(selectSoundsTotal)
  const firstSoundId = useAppSelector(state => state.sounds.ids[0])
  const dispatch = useAppDispatch();
  if(firstSoundId != undefined) dispatch(setCurrentSoundId(firstSoundId))
  return (
    <div className={"flex flex-column justify-around p-2 md:py-10 items-center"}>
      <Head>
        <title>Reproductor Multimedia App</title>
        <meta name="description" content="Reproductor multimedia sencillo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {total > 0 ? <MusicPlayer firstSoundId={firstSoundId}/> : <DropAreaFiles />}
    </div>
  )
}

export default Home
