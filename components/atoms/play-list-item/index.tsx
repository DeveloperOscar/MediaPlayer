import { EntityId } from "@reduxjs/toolkit";
import { selectSoundById } from "app/features/sounds/soundsSlice";
import { useAppSelector } from "app/hooks";

interface Props{
  id: EntityId,
}

const PlayListItem = ({id} : Props)  => {
  const sound = useAppSelector( state => selectSoundById(state,id))
  return (
    <div className="bg-transparent lowercase text-textPrimary text-xl text-center capitalize hover:bg-neutral1 flex justify-between">
      <p>
        {sound ? sound.title : "titulo desconocido"}
      </p>
      <p>
        {formatDuration(sound?.duration ? sound?.duration : 0)}
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
