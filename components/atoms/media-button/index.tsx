import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function MediaButton({ icon , onClick}: Props) {
  return (
    <button onClick={onClick} className={" flex justify-center rounded-full hover:bg-neutral1 active:bg-primary"}>
      <FontAwesomeIcon icon={icon} color={"#dacdc6"} className={"w-2/5"}/>
    </button>
  )
}

export default MediaButton;
