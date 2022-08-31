import { addSound, MusicEntity, selectSoundIds } from "app/features/sounds/soundsSlice";
import PlayListItem from "components/atoms/play-list-item"
import Image from "next/image";
import { DragEventHandler, useCallback, useState } from "react";
import * as mm from 'music-metadata-browser';
import { useAppDispatch, useAppSelector } from "app/hooks";
import { v4 as uuidv4 } from 'uuid';

const PlayList = () => {
  const idsSounds = useAppSelector(selectSoundIds);
  const dispatch = useAppDispatch()
  const [state, setState] = useState("");

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setState("bg-neutral1")
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
    const promises: Promise<mm.IAudioMetadata>[] = [];

    for (let i = 0; i < fileList.length; ++i) {
      promises.push(mm.parseBlob(fileList[i], {
        duration: true
      }))
    }
    Promise.allSettled(promises).then(results => {
      results.forEach( (r, i) => {
        if(r.status == 'fulfilled') dispatch(addSound(makeMusicEntityOf(r.value,URL.createObjectURL(fileList[i]))))
        else console.log("error for reason: ",r.reason ) //reemplazar a futuro para mensajes de error
      })
    })

  }, [])


  return (
    <div className={`px-4 py-2 h-[200px] md:h-[500px] flex flex-col justify-center gap-5 `} onDragOver={onDragOver} onDrop={onDrop} onDragLeave={onDragLeave}>
      {
        idsSounds.length > 0 ?
          idsSounds.map((id) => <PlayListItem id={id} />)
          : <div className={`flex flex-col justify-center items-center w-full h-full border-4 border-dashed border-acent2 ${state}`}>
            <Image
              src="/img/cloudsound.svg"
              layout="fixed"
              width={200}
              height={200}
            />
            <p className="font-mont md:text-xl">Arrastra y suelta tus pistas de audio favoritas</p>
          </div>
      }
    </div>
  )
}

function makeMusicEntityOf(metadata: mm.IAudioMetadata, url : string): MusicEntity {
  return {
    title: metadata.common.title ? metadata.common.title : "",
    autor: metadata.common.artist,
    id: uuidv4(),
    album: metadata.common.albumartist,
    genre: metadata.common.genre ? metadata.common.genre[0] : undefined,
    currentTime: 0,
    duration: metadata.format.duration ? metadata.format.duration : 0,
    status: "open",
    url
  }
}

export default PlayList;
