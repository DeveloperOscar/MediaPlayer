import { configureStore } from '@reduxjs/toolkit'
import soundsReducer from 'app/features/sounds/soundsSlice';
import musicPlayerReducer from 'app/features/musicPlayerSlice'



const store = configureStore({
  reducer: {
    sounds: soundsReducer,
    musicPlayer: musicPlayerReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type Selector<S> = (state: RootState) => S;
export default store;
