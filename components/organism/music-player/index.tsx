import CardContainer from "components/atoms/card-container";
import MediaTitle from "components/atoms/media-title";
import MediaControl from "components/molecules/media-control";
import PlayList from "components/molecules/play-list";

const MusicPlayer = () => {
  return (
    <CardContainer className="w-full md:w-[50%]">
      <MediaTitle title="Nombre de la musica en ejecucion" subtitle="nombre del autor" />
      <PlayList/>
      <MediaControl />
    </CardContainer>
  )
}

export default MusicPlayer;
