import BackwardStepButton from "components/atoms/media-player/backward-step";
import ForwardStepButton from "components/atoms/media-player/forward-step";
import PlayButton from "components/atoms/media-player/play-button";
import RepeatButton from "components/atoms/media-player/repeat-button";
import ShuffleButton from "components/atoms/media-player/shuffle-button";
import ProgressBar from "components/atoms/media-player/progress-bar";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import PauseButton from "components/atoms/media-player/pause-button";
import { selectSoundById } from "app/features/sounds/soundsSlice";
import { selectCurrentId } from "app/features/musicPlayerSlice";

const MediaControl = () => {
  const currentSoundId = useAppSelector(selectCurrentId);
  const status = useAppSelector((state: RootState) => state.musicPlayer.status);
  const sound = useAppSelector((state : RootState) => selectSoundById(state,currentSoundId ? currentSoundId : "" ))

  return (
    <div className="flex flex-col w-full">
      <ProgressBar currentTime={sound?.currentTime} duration={sound?.duration} />
      <div className="flex w-full justify-around">
        <ShuffleButton />
        <BackwardStepButton />
        {status === "play" ? <PauseButton /> : <PlayButton />}
        <ForwardStepButton />
        <RepeatButton />
      </div>
    </div>
  )
}

export default MediaControl;
