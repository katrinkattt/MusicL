import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './rootReducer';

export const store = configureStore({ reducer: reducers });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
