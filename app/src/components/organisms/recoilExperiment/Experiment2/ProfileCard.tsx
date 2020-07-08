import React from 'react'

import { styled } from '@/styles'
import { Profile, actions } from './store/profile'
import { useDispatch } from 'react-redux'

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

  p {
    white-space: break-spaces;
  }
`

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(actions.setSelectedProfile(profile))
  }

  return (
    <Wrapper onClick={() => handleClick()}>
      <div>
        <p>ID</p>
        <p>{profile.id}</p>
      </div>
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
