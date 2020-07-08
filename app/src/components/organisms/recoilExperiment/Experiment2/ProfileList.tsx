import React from 'react'

import { styled } from '@/styles'
import { useSelector } from 'react-redux'
import selectors from './store/profile/selectors'
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
  const profiles = useSelector(selectors.profiles)
  console.log('list')
  return (
    <Wrapper>
      <List>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </List>
    </Wrapper>
  )
}

export default ProfileList
