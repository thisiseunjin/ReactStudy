import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },

  //1. state 수정해주는 함수 만들이
  reducers: {
    changeName(state) {
      state.name = "part";
    },
    increase(state) {
      state.age += 1;
    },
  },
});
//2. 만든 함수  export해야함
export let { changeName, increase } = user.actions;

export default user;
