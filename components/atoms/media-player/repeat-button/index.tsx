import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { alternateRepeat } from "app/features/musicPlayerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MediaButton from "components/atoms/media-button";
import { useCallback } from "react";

const RepeatButton  = () => {
  const dispatch = useAppDispatch();
  const isRepeat = useAppSelector(state => state.musicPlayer.repeat);
  let className = ""
  if(isRepeat) className = "bg-primary"
  else className = ""
  const onClick = useCallback(() => {
    dispatch(alternateRepeat())
  },[])
  return (
    <MediaButton
      icon={faRepeat}
      onClick={onClick}
      className={className}
    />
  )
}

export default RepeatButton;
