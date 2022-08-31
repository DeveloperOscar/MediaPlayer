import { EntityId } from "@reduxjs/toolkit";
import { selectSoundById } from "app/features/sounds/soundsSlice";
import { useAppSelector } from "app/hooks";

interface Props{
  id: EntityId,
}

const PlayListItem = ({id} : Props)  => {
  const sound = useAppSelector( state => selectSoundById(state,id))
  return (
    <div className="bg-transparent lowercase text-textPrimary text-xl text-center capitalize hover:bg-neutral1" key={id}>
      {sound ? sound.title : "titulo desconocido"}
    </div>
  )
}




export default PlayListItem;
