import { selectCurrentId } from "app/features/musicPlayerSlice";
import { selectSoundById } from "app/features/sounds/soundsSlice";
import { useAppSelector } from "app/hooks";


const MediaTitle = ()  => {
  const currentSoundId = useAppSelector(selectCurrentId);
  const currentSound = useAppSelector((state) => selectSoundById(state,currentSoundId ? currentSoundId : ""));
  let [title,autor] = ["",""]
  if(currentSound){
   title = currentSound.title ? currentSound.title : "titulo desconocido" ;
   autor = currentSound.autor ? currentSound.autor : "autor desconocido" ;
  }
  return (
    <div className="flex flex-col items-center bg-transparent">
      <strong className="grow font-mont text-2xl">{title}</strong>
      <span className="grow font-mont">{autor}</span>
    </div>
  )  
}

export default MediaTitle;
