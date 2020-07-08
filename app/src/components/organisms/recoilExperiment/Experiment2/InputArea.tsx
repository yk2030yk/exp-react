import React from 'react'

import { styled } from '@/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Profile, actions } from './store/profile'
import selectors from './store/profile/selectors'

const Wrapper = styled.div``

const Content = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;

  & > div > input {
    width: 100%;
    padding: 5px;
  }

  & > div > textarea {
    width: 100%;
    padding: 5px;
    height: 100px;
  }

  & > p {
    padding: 3px;
  }
`

const Item = styled.div`
  margin-bottom: 10px;

  & > label {
    display: block;
    margin-bottom: 10px;
  }
`

const Page: React.FC = () => {
  const dispatch = useDispatch()
  const profile = useSelector(selectors.selectedProfile)

  const handleChange = (newValue: Partial<Profile>) => {
    if (!profile) return
    const newProfile = { ...profile, ...newValue }
    dispatch(actions.updateItem(newProfile))
    dispatch(actions.setSelectedProfile(newProfile))
  }

  const disabled = profile === undefined

  if (!profile) return <div></div>

  return (
    <Wrapper>
      <Content>
        <Item>
          <label>ID: {profile.id}</label>
        </Item>
        <Item>
          <label>名前を入力</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange({ name: e.target.value })}
            disabled={disabled}
          />
        </Item>
        <Item>
          <label>強みを入力</label>
          <textarea
            value={profile.strengths}
            onChange={(e) => handleChange({ strengths: e.target.value })}
            disabled={disabled}
          />
        </Item>
      </Content>
    </Wrapper>
  )
}

export default Page
