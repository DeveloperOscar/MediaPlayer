import Image from "next/image";
import { DragEventHandler, useCallback, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { addSound } from "app/features/sounds/soundsSlice";
import useLoadAudioFile from "app/hooks/custom/useLoadAudioFile";

const DropAreaFiles = () => {
  const [state, setState] = useState("");
  const dispatch = useAppDispatch()
  const [loadFiles,makeMusicEntity] = useLoadAudioFile();

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setState("bg-neutral3")
    if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
  }, [])

  const onDragLeave: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setState("bg-transparent")
  }, [])

  const onDrop: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setState("bg-transparent")
    const fileList = e.dataTransfer.files;
    loadFiles(fileList).then(results => {
      results.forEach((r, i) => {
        if (r.status == 'fulfilled') dispatch(addSound(makeMusicEntity(r.value, fileList[i])))
        else console.log("error for reason: ", r.reason) //reemplazar a futuro para mensajes de error con un dispatch
      })
    }) 
  }, [])
  return (
    <div className={`flex flex-col justify-center items-center w-full md:h-[500px] border-4 border-dashed border-acent2 ${state}`}
      onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      <Image
        src="/img/cloudsound.svg"
        layout="fixed"
        width={200}
        height={200}
        priority
      />
      <p className="font-mont md:text-xl">Arrastra y suelta tus pistas de audio favoritas</p>
    </div>
  )
}


export default DropAreaFiles;
