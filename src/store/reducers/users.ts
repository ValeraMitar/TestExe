// import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
// import { loadUsersByIdAction } from '../actions/users';
// import type { RootState } from '../../store/store'
// export interface User {
//   id: number,
//   name: string,
//   username: string,
// }
//
// interface UserState {
//   user: User
// }
//
// const initialState: UserState = {
//   user: {
//     id: 0,
//     name: '',
//     username: '',
//   },
// }
//
// export const users = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     setUser: (state:UserState, action:PayloadAction<User>) => {
//       state.user = action.payload
//     },
//   },
// })
//
// export const { setUser } = users.actions
// export const getUserById = (id:number) => (dispatch:Dispatch) => {
//   dispatch(loadUsersByIdAction(id)).then(result => dispatch(setUser(result)));
// }
// export const user = (state: RootState) => state.users.user
// export default users.reducer
