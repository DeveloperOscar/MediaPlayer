import { faPause } from "@fortawesome/free-solid-svg-icons";
import { setStatusPlay } from "app/features/musicPlayerSlice";
import { useAppDispatch } from "app/hooks";
import MediaButton from "components/atoms/media-button";

const PauseButton = () => {
  const dispatch = useAppDispatch();
  return (
    <MediaButton
      icon={faPause}
      onClick={() => dispatch(setStatusPlay("pause"))}
    />
  )
}

export default PauseButton;
