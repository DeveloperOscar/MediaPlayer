import { setCurrentSoundId } from "app/features/musicPlayerSlice";
import { selectSoundsTotal } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Fragment, useEffect } from "react";
import DropAreaFiles from "./atoms/drop-area-files";
import MusicPlayer from "./organism/music-player";


const AppMediaPlayer = () => {
  const total = useAppSelector(selectSoundsTotal)
  const firstSoundId = useAppSelector(state => state.sounds.ids[0])
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (firstSoundId) {
      dispatch(setCurrentSoundId(firstSoundId))
    }
  },[firstSoundId])

  return (
    <Fragment>
      {total > 0 ? <MusicPlayer firstSoundId={firstSoundId} /> : <DropAreaFiles />}
    </Fragment>
  )
}

export default AppMediaPlayer;
