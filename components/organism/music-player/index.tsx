import { selectSoundById, setCurrentTimeById, setStatusOpenById } from "app/features/sounds/soundsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import CardContainer from "components/atoms/card-container";
import MediaTitle from "components/atoms/media-title";
import MediaControl from "components/molecules/media-control";
import { useEffect } from "react";
import { selectCurrentId, setStatusPlay } from "app/features/musicPlayerSlice";
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
        nextSound()
        dispatch(setCurrentTimeById({ id: currentSound?.id, currentTime: 0 }))
        dispatch(setStatusPlay("play"))
        audio.play()
      }

      if (status == "play") {
        audio.play()
      } else if (status == "pause") {
        audio.pause()
      }
    }
  }, [status, currentSoundId])


  return (
    <CardContainer className="w-full  md:w-[50%] p-2">
      <audio id="audio" src={currentSound?.url}></audio>
      <MediaTitle />
      <PlayList />
      <MediaControl />
    </CardContainer>
  )
}

export default MusicPlayer;
