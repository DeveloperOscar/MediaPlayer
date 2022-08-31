import { configureStore } from '@reduxjs/toolkit'
import soundsReducer from 'app/features/sounds/soundsSlice';



const store = configureStore({
  reducer: {
    sounds: soundsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
