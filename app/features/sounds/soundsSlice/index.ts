import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { RootState } from 'app/store'

export interface MusicEntity {
  readonly id: string,
  readonly title: string,
  readonly autor?: string,
  readonly url: string,
  currentTime: number,
  readonly duration: number,
  readonly genre?: string,
  readonly album?: string,
  status: "open" | "closed" 
}

//el adaptador nos ofrece un estado inicial preconfigurado y selectores personalizados
//asi mismo contiene funciones para manipular nuestra estructura interna de entities(CRUD)
const soundsAdapter = createEntityAdapter<MusicEntity>({
  sortComparer: (a, b) => a.title.localeCompare(b.title)
})


//el objecto soundsSlice contendra los creadores de accion preconfigurados y el reducer
const soundsSlice = createSlice({
  name: "sounds",
  initialState: soundsAdapter.getInitialState(),
  reducers: {
    addSound: soundsAdapter.addOne,
    setCurrentTimeById(state, action) {
      const sound = state.entities[action.payload.id];
      if(sound) sound.currentTime = action.payload.currentTime;
    },
    setStatusOpenById(state,action){
      const sound = state.entities[action.payload.id];
      if(sound) sound.status = action.payload.status;
    },
    resetSoundsAll(state){
      Object.values(state.entities).forEach((sound) => {
        if(sound) {
          sound.status = "open"
          sound.currentTime = 0;
        }
      })
    }
  }
})

export default soundsSlice.reducer;
export const { 
  addSound,
  setCurrentTimeById, 
  setStatusOpenById,
  resetSoundsAll
} = soundsSlice.actions;
export const {
  selectIds: selectSoundIds,
  selectById: selectSoundById,
  selectTotal: selectSoundsTotal,
  selectAll: selectSoundsAll
} = soundsAdapter.getSelectors((state: RootState) => state.sounds)
//podemos exportar tambien otros selectores , ya sean memorizados o los normales

export const selectSoundIdsByStatus = (status: "open" | "closed") => createSelector(
  selectSoundsAll,
  (state : RootState) => state.musicPlayer.currentSoundId,
  (sounds,currentId) => sounds.filter(sound => (sound.status == status && sound.id != currentId)).map( sound => sound.id)
);

export const selectNextSoundId = createSelector(
  selectSoundIdsByStatus("open"),
  (ids) => {
    if(ids.length == 0) return undefined;
    return ids[0];
  }
);


