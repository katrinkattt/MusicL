import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlayerState = {
  nameList: string;
  data: {
    id: number;
    url: string;
    title: string;
    artist: string;
    artwork: string;
    duration: number;
    loadImg: string;
    genre: string;
  }[];
};
export const playerSlice = createSlice({
  name: 'player',
  initialState: [] as Array<PlayerState>,
  reducers: {
    addToPlayer: (state, { payload }: PayloadAction<PlayerState>) => {
      state.length = 0;
      state.push.apply(state, [{ data: payload.data, nameList: payload.nameList }]);
    },
  },
});
export const { reducer: playerReducer, actions: PlayerAction } = playerSlice;
