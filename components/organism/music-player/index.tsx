import MediaImage from "components/atoms/media-image";
import MediaTitle from "components/atoms/media-title";
import MediaControl from "components/molecules/media-control";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col w-[25%] bg-neutral2 rounded-lg outline ooutline-4 utline-primary  drop-shadow-[0_12px_35px_#313d4f]">
      <MediaTitle title="Titulo de la musica" subtitle="autor de la musica"/>
      <MediaImage src={"/img/nota_musical.svg"}/>
      <MediaControl/>
    </div>
  ) 
}

export default MusicPlayer;
