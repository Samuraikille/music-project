import { createSlice } from "@reduxjs/toolkit";

interface IUserSlice  {
    user: IUser | null
}


const initialState:IUserSlice = {
  user:  null,
};
export interface IUser {
    mail: string;
    user_id: number;
    name: string;
    reg_data: string;
}
const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    changeUser(state, action) {
        state.user = action.payload
    },
  },
});

export default userSlice.reducer
export const {changeUser} = userSlice.actions