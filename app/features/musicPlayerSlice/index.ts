import { createSlice, EntityId } from "@reduxjs/toolkit";

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
    alternateStatus({ status }){
      if(status == "play") status = "pause";
      else status = "play"
    },
    
    setCurrentSoundId( status , { payload }){
      status.currentSoundId = payload
    }
  }
});


export default musicPlayerSlice.reducer;
export const {alternateStatus , setCurrentSoundId} =  musicPlayerSlice.actions;
