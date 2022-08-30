import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import MediaButton from "components/atoms/media-button";

const ShuffleButton = () => {
  return (
    <MediaButton
      icon={faShuffle}
      onClick={undefined}
    />
  ) 
}

export default ShuffleButton;
