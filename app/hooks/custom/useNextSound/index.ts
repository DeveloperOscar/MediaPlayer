import { pushPrevSoundId, selectCurrentId, setCurrentSoundId } from "app/features/musicPlayerSlice";
import { resetSoundsAll, selectNextSoundId, selectSoundIds, selectSoundIdsByStatus, selectSoundsTotal, setStatusOpenById } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { randomArange } from "helpers/react";
import { useCallback } from "react";

const useNextSound = () => {
  const firstSoundId = useAppSelector(state => state.sounds.ids[0])
  const nextSoundId = useAppSelector(selectNextSoundId)
  const currentSoundId = useAppSelector(selectCurrentId);
  const isShuffle =  useAppSelector(state => state.musicPlayer.shuffle);
  const soundIds = useAppSelector(selectSoundIdsByStatus("open"));
  const dispatch = useAppDispatch();

  const nextSound = useCallback(() => {
    if (nextSoundId) {
      dispatch(setStatusOpenById({ id: currentSoundId, status: "closed" }))
      dispatch(pushPrevSoundId(currentSoundId));
      if(isShuffle){
        dispatch(setCurrentSoundId(soundIds[randomArange(0,soundIds.length - 1)]));
      }else dispatch(setCurrentSoundId(nextSoundId));
    } else {
      dispatch(resetSoundsAll())
      dispatch(setCurrentSoundId(firstSoundId))
    }
  }, [nextSoundId,currentSoundId,isShuffle,soundIds])

  return nextSound;
}

export default useNextSound;
