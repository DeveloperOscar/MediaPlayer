import { faPause } from "@fortawesome/free-solid-svg-icons";
import MediaButton from "components/atoms/media-button";

const PauseButton = () => {
  return (
    <MediaButton
      icon={faPause}
      onClick={undefined}
    />
  )
}

export default PauseButton;
