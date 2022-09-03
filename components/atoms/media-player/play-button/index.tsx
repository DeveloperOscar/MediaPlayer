import {faPlay } from "@fortawesome/free-solid-svg-icons"
import { setStatusPlay } from "app/features/musicPlayerSlice"
import { useAppDispatch } from "app/hooks"
import MediaButton from "components/atoms/media-button"
import { MouseEventHandler, useCallback } from "react"

const PlayButton = () => {
  const dispatch = useAppDispatch();
  const onPlay : MouseEventHandler<HTMLButtonElement> = useCallback((_) => {
    dispatch(setStatusPlay("play"))
  },[]); 
  return (
    <MediaButton
      icon={faPlay}
      onClick={onPlay}
    />
  )
}

export default PlayButton;
