import { EntityId } from "@reduxjs/toolkit";
import { selectCurrentId } from "app/features/musicPlayerSlice";
import { selectSoundById } from "app/features/sounds/soundsSlice";
import { useAppSelector } from "app/hooks";

interface Props{
  id: EntityId,
  index: number
}

const PlayListItem = ({id,index} : Props)  => {
  const sound = useAppSelector( state => selectSoundById(state,id))
  const currentSoundId = useAppSelector(selectCurrentId);
  let textColor = "";
  if(currentSoundId === sound?.id) textColor = "text-acent1"
  else textColor = "";
  return (
    <div className={`bg-transparent text-textPrimary text-xl capitalize hover:bg-neutral1 flex gap-2 justify-between ${textColor}`}>
      <p className={`truncate ...  whitespace-nowrap`}>
        {index+". "}{sound ? sound.title : "titulo desconocido"}
      </p>
      <p className="whitespace-nowrap">
        {formatDuration((sound)? (sound.duration - sound.currentTime) : 0)}
      </p>
    </div>
  )
}

function formatDuration(duration: number): string{
  let [hours,minuts,seconds] = [0,0,Math.floor(duration)];
  if(seconds > 60) {
    minuts = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
  }
  if(minuts > 60){
    hours = Number((minuts / 60).toFixed(0));
    minuts = minuts % 60;
  }
  return `${(hours < 10)? "0"+hours: hours} : ${ minuts < 10 ? "0"+minuts : minuts} : ${seconds < 10 ? "0"+seconds : seconds}`
}






export default PlayListItem;
