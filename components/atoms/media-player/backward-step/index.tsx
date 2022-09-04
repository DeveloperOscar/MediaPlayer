import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { popPrevSoundId, selectLastPrevSoundId, setCurrentSoundId } from "app/features/musicPlayerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MediaButton from "components/atoms/media-button";
import { useCallback } from "react";

const BackwardStepButton = () => {
  const prevSoundId = useAppSelector(selectLastPrevSoundId);
  const dispatch = useAppDispatch()

  const onClick = useCallback(() => {
    if (prevSoundId) {
      dispatch(setCurrentSoundId(prevSoundId))
      dispatch(popPrevSoundId())
    }
  }, [prevSoundId])

  return (
    <MediaButton
      icon={faBackwardStep}
      onClick={onClick}
    />
  )
}

export default BackwardStepButton;
