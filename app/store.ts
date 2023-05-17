import { configureStore } from '@reduxjs/toolkit';
// ...
function activePlayer(state = { active: false }, action) {
  switch (action.type) {
    case 'SWITCH_ACTION':
      return { active: !state.active };
    default:
      return state;
  }
}
function activePlayList(state = { list: [] }, action) {
  switch (action.type) {
    case 'SWITCH_LIST':
      return { list: action };
    case 'UNACTIVE':
      return { list: [] };
    default:
      return state;
  }
}
// function currentTrack(state = { track: {} }, action) {
//   switch (action.type) {
//     case 'SWITCH_CURR_TRACK':
//       return { track: action };
//     case 'UNACTIVE_TRACK':
//       return { track: {} };
//     default:
//       return state;
//   }
// }

export const store = configureStore({
  reducer: {
    activePlayer,
    activePlayList,
    // currentTrack,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
