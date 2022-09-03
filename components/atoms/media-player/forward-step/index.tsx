import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import useNextSound from "app/hooks/custom/useNextSound";
import MediaButton from "components/atoms/media-button";
import { MouseEventHandler, useCallback } from "react";

const ForwardStepButton = () => {
  const nextSound = useNextSound();

  const onClick: MouseEventHandler<HTMLButtonElement> = useCallback((_) => {
    nextSound()
  }, [nextSound])


  return (
    <MediaButton
      icon={faForwardStep}
      onClick={onClick}
    />
  )
}

export default ForwardStepButton;
