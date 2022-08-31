import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import type { RootState } from 'app/store'

export interface MusicEntity{
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
  sortComparer: (a,b) => a.title.localeCompare(b.title)
})
    

//el objecto soundsSlice contendra los creadores de accion preconfigurados y el reducer
const soundsSlice = createSlice({
  name: "sounds",
  initialState: soundsAdapter.getInitialState(),
  reducers: {
    addSound: soundsAdapter.addOne,
  }
})

export default soundsSlice.reducer;
export const { addSound } = soundsSlice.actions;
export const {selectIds: selectSoundIds, selectById: selectSoundById} =  soundsAdapter.getSelectors((state: RootState)  => state.sounds)
//podemos exportar tambien otros selectores , ya sean memorizados o los normales
