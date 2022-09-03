import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { pushPrevSoundId, selectCurrentId, setCurrentSoundId } from "app/features/musicPlayerSlice";
import { resetSoundsAll, selectNextSoundId, setStatusOpenById } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MediaButton from "components/atoms/media-button";
import { MouseEventHandler, useCallback } from "react";

const ForwardStepButton = () => {
  const firstSoundId = useAppSelector(state => state.sounds.ids[0])
  const nextSoundId = useAppSelector(selectNextSoundId)  
  const currentSoundId = useAppSelector(selectCurrentId); 
  const dispatch = useAppDispatch();

  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback((_) => {
    if(nextSoundId){
      dispatch(setStatusOpenById({ id: currentSoundId, status: "closed" }))
      dispatch(pushPrevSoundId(currentSoundId));
      dispatch(setCurrentSoundId(nextSoundId));
    }else {
      dispatch(resetSoundsAll())
      dispatch(setCurrentSoundId(firstSoundId))
    }
  }, [nextSoundId,currentSoundId])


  return (
    <MediaButton
      icon={faForwardStep}
      onClick={onClick}
    />
  )
}

export default ForwardStepButton;
