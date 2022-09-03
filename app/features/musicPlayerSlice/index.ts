import { createSlice, EntityId } from "@reduxjs/toolkit";
import { RootState } from "app/store";


interface MusicPlayerState{
  status: "play" | "pause"
  currentSoundId?: EntityId,
  prevSoundsId: EntityId[]
  shuffle: boolean,
  repeat: boolean
}

const initialState : MusicPlayerState = {
  status: "pause",
  currentSoundId: undefined,
  prevSoundsId: [],
  shuffle: false,
  repeat: false,
}

const musicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers:{
    setStatusPlay(state,action){
      state.status = action.payload;
    },
    
    setCurrentSoundId( state , action){
      state.currentSoundId = action.payload 
    },
   
    pushPrevSoundId(state, action){
      state.prevSoundsId.push(action.payload)
    },

    popPrevSoundId(state){
      state.prevSoundsId.pop()
    }
  }
});

export default musicPlayerSlice.reducer;
export const {
  setStatusPlay,
  setCurrentSoundId,
  pushPrevSoundId,
  popPrevSoundId
} =  musicPlayerSlice.actions;
export const selectCurrentId = ( state : RootState ) => state.musicPlayer.currentSoundId;
export const selectLastPrevSoundId = (state: RootState) => {
  const prevSoundsId = state.musicPlayer.prevSoundsId;
  if(prevSoundsId.length > 0) return prevSoundsId[prevSoundsId.length - 1];
  return undefined;
}

