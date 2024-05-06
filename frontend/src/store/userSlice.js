import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  password: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
  },
})

export const { setName, setEmail, setPassword } = userSlice.actions
export default userSlice.reducer
