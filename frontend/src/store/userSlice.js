import { createSlice } from "@reduxjs/toolkit";
import { images } from "../javascripts/images";

const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
  insta: "",
  github: "",
  linkedin: "",
  userImage: images.accDefaultLogo,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setInsta: (state, action) => {
      state.insta = action.payload;
    },
    setGithub: (state, action) => {
      state.github = action.payload;
    },
    setLinkedin: (state, action) => {
      state.linkedin = action.payload;
    },
    storeUserImage: (state, action) => {
      state.userImage = action.payload;
      localStorage.setItem("userImage", state.userImage);
    },
  },
});

export const {
  setId,
  setName,
  setEmail,
  setPassword,
  setInsta,
  setGithub,
  setLinkedin,
  storeUserImage,
  setUserProblems,
} = userSlice.actions;
export default userSlice.reducer;
