import { setCurrentSoundId } from "app/features/musicPlayerSlice";
import { selectSoundsTotal } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Fragment, useEffect } from "react";
import DropAreaFiles from "./atoms/drop-area-files";
import MusicPlayer from "./organism/music-player";

let counter = 0;

const AppMediaPlayer = () => {
  const total = useAppSelector(selectSoundsTotal)
  const firstSoundId = useAppSelector(state => state.sounds.ids[0])
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (firstSoundId && counter == 0) {
      dispatch(setCurrentSoundId(firstSoundId))
      counter += 1;
    }
  })

  return (
    <Fragment>
      {total > 0 ? <MusicPlayer firstSoundId={firstSoundId} /> : <DropAreaFiles />}
    </Fragment>
  )
}

export default AppMediaPlayer;
