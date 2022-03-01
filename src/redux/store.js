import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions-slice';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionsSlice.reducer,
    rockets: rocketsReducer,
  },
});

export default store;
