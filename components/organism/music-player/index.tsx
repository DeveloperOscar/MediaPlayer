import { selectSoundById,  selectSoundsTotal,  setCurrentTimeById } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import CardContainer from "components/atoms/card-container";
import MediaTitle from "components/atoms/media-title";
import MediaControl from "components/molecules/media-control";
import { useEffect } from "react";
import { selectCurrentId  } from "app/features/musicPlayerSlice";
import PlayList from "components/molecules/play-list";
import { EntityId } from "@reduxjs/toolkit";
import useNextSound from "app/hooks/custom/useNextSound";

interface Props {
  firstSoundId: EntityId
}

const MusicPlayer = ({ firstSoundId }: Props) => {
  const currentSoundId = useAppSelector(selectCurrentId)
  const currentSound = useAppSelector((state) => selectSoundById(state, currentSoundId ? currentSoundId : firstSoundId ));
  const status = useAppSelector(state => state.musicPlayer.status);
  const isRepeat = useAppSelector(state => state.musicPlayer.repeat);
  const total = useAppSelector(selectSoundsTotal);
  const dispatch = useAppDispatch();
  const nextSound = useNextSound();

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement | null;
    if (audio != null) {
      audio.onload = function() {
        audio.currentTime = currentSound ? currentSound.currentTime : 0
      }

      audio.ontimeupdate = function() {
        dispatch(setCurrentTimeById({
          id: currentSound?.id,
          currentTime: audio.currentTime
        }))
      }

      audio.onended = function() {
        if(!isRepeat){
          nextSound()
          dispatch(setCurrentTimeById({ id: currentSound?.id, currentTime: 0 }))
        }
        audio.play()
      }

      if (status == "play") {
        audio.play()
      } else if (status == "pause") {
        audio.pause()
      }
    }
  }, [status, currentSoundId,isRepeat])


  return (
    <CardContainer className="w-full xl:w-[50%]">
      <audio id="audio" src={currentSound?.url}></audio>
      {total > 15 ? <MediaControl /> : ""}
      <MediaTitle />
      <PlayList />
      {total <= 15 ? <MediaControl /> : ""}
    </CardContainer>
  )
}

export default MusicPlayer;
