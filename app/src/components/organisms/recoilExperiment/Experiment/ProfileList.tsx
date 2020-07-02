import React from 'react'

import { styled } from '@/styles'
import { useRecoilValue } from 'recoil'
import { profileIdsState } from './recoil/name'
import ProfileCard from './ProfileCard'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
`

const List = styled.div`
  padding: 5px;
  height: 500px;
  overflow: scroll;
`

const ProfileList: React.FC = () => {
  const profileIds = useRecoilValue(profileIdsState)
  return (
    <Wrapper>
      <List>
        {profileIds.map((id) => (
          <ProfileCard key={id} id={id} />
        ))}
      </List>
    </Wrapper>
  )
}

export default ProfileList
