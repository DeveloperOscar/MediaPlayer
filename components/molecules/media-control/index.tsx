import BackwardStepButton from "components/atoms/media-player/backward-step";
import ForwardStepButton from "components/atoms/media-player/forward-step";
import PlayButton from "components/atoms/media-player/play-button";
import RepeatButton from "components/atoms/media-player/repeat-button";
import ShuffleButton from "components/atoms/media-player/shuffle-button";
import ProgressBar from "components/atoms/media-player/progress-bar";

const MediaControl = () => {
  return (
    <div className="flex flex-col w-full">
      <ProgressBar currentTime={30000} duration={60000}/>
      <div className="flex w-full justify-around">
        <ShuffleButton />
        <BackwardStepButton />
        <PlayButton />
        <ForwardStepButton />
        <RepeatButton />
      </div>
    </div>
  )
}

export default MediaControl;
