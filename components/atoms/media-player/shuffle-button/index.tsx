import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { alternateShuffle } from "app/features/musicPlayerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import MediaButton from "components/atoms/media-button";
import { useCallback } from "react";

const ShuffleButton = () => {
  const dispatch = useAppDispatch()
  const isShuffle = useAppSelector(state => state.musicPlayer.shuffle);
  let className = "";
  if(isShuffle){
    className = "bg-primary"; 
  }else className = ""

  const onClick = useCallback(() => {
    dispatch(alternateShuffle());
  },[])
  return (
    <MediaButton
      icon={faShuffle}
      onClick={onClick}
      className={className}
    />
  ) 
}

export default ShuffleButton;
