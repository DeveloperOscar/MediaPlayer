import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function MediaButton({ icon , onClick}: Props) {
  return (
    <button onClick={onClick} className={" flex justify-center rounded-full px-3 items-center py-1 hover:bg-neutral1 active:bg-primary"}>
      <FontAwesomeIcon icon={icon} color={"#dacdc6"} className={"w-[2em]"}/>
    </button>
  )
}

export default MediaButton;
