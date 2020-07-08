import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export { default as selectors } from './selectors'

export type Profile = {
  id: string
  name: string
  strengths: string
}

const initialState: {
  profiles: Profile[]
  selectedProfile: Profile | undefined
} = {
  profiles: [],
  selectedProfile: undefined,
}

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action) => {
      return { ...state, profiles: action.payload }
    },
    setSelectedProfile: (state, action: PayloadAction<Profile>) => {
      return { ...state, selectedProfile: action.payload }
    },
    insertItem: (state, action: PayloadAction<Profile>) => {
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      }
    },
    updateItem: (state, action: PayloadAction<Profile>) => {
      return {
        ...state,
        profiles: state.profiles.map((item) => {
          if (item.id !== action.payload.id) {
            return item
          }

          return {
            ...item,
            ...action.payload,
          }
        }),
      }
    },
  },
})

export const { reducer, actions } = slice
