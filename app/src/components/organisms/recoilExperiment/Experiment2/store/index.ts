import { combineReducers } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { reducer as profileReducer } from './profile'

const reducer = combineReducers({
  profile: profileReducer,
})

export const store = configureStore({ reducer })

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector
