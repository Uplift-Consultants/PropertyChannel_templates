import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from './features/userAPI';
import { clinicAPI } from './features/clinicAPI';
import staffReducer from './features/staffSlice';

export function makeStore() {
  return configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer,
        [clinicAPI.reducerPath]: clinicAPI.reducer,
        staff: staffReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        userAPI.middleware,
        clinicAPI.middleware
    ] 
})};

export const store = makeStore();