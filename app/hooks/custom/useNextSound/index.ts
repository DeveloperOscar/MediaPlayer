import { pushPrevSoundId, selectCurrentId, setCurrentSoundId } from "app/features/musicPlayerSlice";
import { resetSoundsAll, selectNextSoundId, setStatusOpenById } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useCallback } from "react";

const useNextSound = () => {
  const firstSoundId = useAppSelector(state => state.sounds.ids[0])
  const nextSoundId = useAppSelector(selectNextSoundId)
  const currentSoundId = useAppSelector(selectCurrentId);
  const dispatch = useAppDispatch();

  const nextSound = useCallback(() => {
    if (nextSoundId) {
      dispatch(setStatusOpenById({ id: currentSoundId, status: "closed" }))
      dispatch(pushPrevSoundId(currentSoundId));
      dispatch(setCurrentSoundId(nextSoundId));
    } else {
      dispatch(resetSoundsAll())
      dispatch(setCurrentSoundId(firstSoundId))
    }
  }, [nextSoundId,currentSoundId])

  return nextSound;
}

export default useNextSound;
