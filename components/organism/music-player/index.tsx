import { selectSoundsTotal } from "app/features/sounds/soundsSlice";
import { useAppSelector } from "app/hooks";
import CardContainer from "components/atoms/card-container";
import MediaTitle from "components/atoms/media-title";
import MediaControl from "components/molecules/media-control";
import PlayList from "components/molecules/play-list";

const MusicPlayer = () => {
  const total = useAppSelector(selectSoundsTotal)
  return (
    <CardContainer className="w-full md:w-[50%]">
      {total > 0 ? <MediaTitle title="title" subtitle="autor" /> : "" }
      <PlayList/>
      {total > 0 ? <MediaControl /> :""}
    </CardContainer>
  )
}

export default MusicPlayer;
