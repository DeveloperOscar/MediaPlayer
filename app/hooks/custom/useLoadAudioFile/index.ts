import { useCallback } from "react";
import * as mm from 'music-metadata-browser';
import { v4 as uuidv4 } from 'uuid';
import { MusicEntity } from "app/features/sounds/soundsSlice";



const useLoadAudioFile = () : [(fileList : FileList) => Promise<PromiseSettledResult<mm.IAudioMetadata>[]>,(metadata: mm.IAudioMetadata,file :File) => MusicEntity] => {
  const loadFiles = useCallback( async (fileList: FileList) => {
    const promises: Promise<mm.IAudioMetadata>[] = [];
    for (let i = 0; i < fileList.length; ++i) {
      promises.push(mm.parseBlob(fileList[i], {
        duration: true
      }))
    }
    return Promise.allSettled(promises);
  }, []);

  return [loadFiles,makeMusicEntity]
}

function makeMusicEntity(metadata: mm.IAudioMetadata, file: File): MusicEntity {
  let name = file.name.replace(/\.\w+/g, "");
  const [autor, title] = name.trim().split("-");
  return {
    title: metadata.common.title ? metadata.common.title : title ? title : "desconocido",
    autor: metadata.common.artist ? metadata.common.artist : autor ? autor : "desconocido",
    id: uuidv4(),
    album: metadata.common.albumartist,
    genre: metadata.common.genre ? metadata.common.genre[0] : undefined,
    currentTime: 0,
    duration: metadata.format.duration ? metadata.format.duration : 0,
    status: "open",
    url: URL.createObjectURL(file)
  }
}

export default useLoadAudioFile;
