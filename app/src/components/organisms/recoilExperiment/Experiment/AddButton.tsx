import React from 'react'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

import { styled } from '@/styles'
import { useSetRecoilState } from 'recoil'
import { profileIdsState } from './recoil/name'

const Button = styled.button`
  padding: 5px;
  width: 150px;
  cursor: pointer;
  background-color: #bfd9ff;
  border: solid 1px #ddd;
  border-radius: 5px;
`

const AddButton: React.FC = () => {
  const setIds = useSetRecoilState(profileIdsState)

  const handleClick = () => {
    setIds((old) => [...old, uuidv4()])
  }

  return <Button onClick={handleClick}>プロフィールを追加</Button>
}

export default AddButton
