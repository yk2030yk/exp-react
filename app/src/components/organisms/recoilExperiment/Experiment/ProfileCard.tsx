import React from 'react'

import { styled } from '@/styles'
import { profileWithIdState, selectedId, modalState } from './recoil/name'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const Wrapper = styled.div`
  min-height: 100px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 5px;
  border: solid 1px #ddd;
  border-radius: 5px;

  &:hover {
    border-color: #ffb6b6;
  }
`

const ProfileCard: React.FC<{ id: string }> = ({ id }) => {
  const profile = useRecoilValue(profileWithIdState(id))
  const setSelectedId = useSetRecoilState(selectedId)
  const setModal = useSetRecoilState(modalState)

  const handleClick = () => {
    setModal(true)
    setSelectedId(id)
  }

  return (
    <Wrapper onClick={() => handleClick()}>
      <div>
        <p>名前</p>
        <p>{profile.name}</p>
      </div>
      <div>
        <p>強み</p>
        <p>{profile.strengths}</p>
      </div>
    </Wrapper>
  )
}

export default ProfileCard
