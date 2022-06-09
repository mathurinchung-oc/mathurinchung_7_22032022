import { createSlice } from '@reduxjs/toolkit';

const slice = {
  name: "user",
  initialState: { currentUser: {}, all: [] },
  reducers: {
    setUsers: (state, { payload }) => { state.all = payload },
    setCurrentUser: (state, { payload }) => { state.currentUser = payload },
    setUpdateUser: (state, { payload }) => {
      const { id, fullname, bio, avatar } = payload;
      state.currentUser = { ...state.currentUser, fullname, bio, avatar };
      
      state.all = state.all.map(user => {
        if (user.id === parseInt(id)) {
          return { ...user, fullname, bio, avatar };
        } else return user;
      });
    }
  }
};

export const usersSlice = createSlice(slice);

export const { setCurrentUser, setUsers, setUpdateUser } = usersSlice.actions;
export default usersSlice.reducer;
