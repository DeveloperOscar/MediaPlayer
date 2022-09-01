import { selectSoundsTotal } from "app/features/sounds/soundsSlice";
import { useAppSelector } from "app/hooks";
import CardContainer from "components/atoms/card-container";
import MediaTitle from "components/atoms/media-title";
import MediaControl from "components/molecules/media-control";
import PlayList from "components/molecules/play-list";
import { Fragment } from "react";
import DropAreaFiles from "components/atoms/drop-area-files";

const MusicPlayer = () => {
  const total = useAppSelector(selectSoundsTotal)
  return (
    <CardContainer className="w-full md:w-[50%] p-2">
      {total > 0 ? (
        <Fragment>
          <MediaTitle title="title" subtitle="autor" />
          <PlayList/>
          <MediaControl />
        </Fragment>
      ): <DropAreaFiles/>}
    </CardContainer>
  )
}

export default MusicPlayer;
