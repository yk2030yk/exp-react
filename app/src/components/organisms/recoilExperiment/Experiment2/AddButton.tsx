import React from 'react'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

import { styled } from '@/styles'
import { useDispatch } from 'react-redux'
import { actions } from './store/profile'

const Button = styled.button`
  padding: 5px;
  width: 150px;
  cursor: pointer;
  background-color: #bfd9ff;
  border: solid 1px #ddd;
  border-radius: 5px;
`

const AddButton: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(actions.insertItem({ id: uuidv4(), name: '', strengths: '' }))
  }

  return <Button onClick={handleClick}>プロフィールを追加</Button>
}

export default AddButton
