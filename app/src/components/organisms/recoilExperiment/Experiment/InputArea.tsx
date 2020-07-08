import React from 'react'

import { styled } from '@/styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { profileWithIdState, selectedId, Profile } from './recoil/name'

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
  const id = useRecoilValue(selectedId)
  const [profile, setProfile] = useRecoilState(profileWithIdState(id))

  const handleChange = (newValue: Partial<Profile>) => {
    setProfile((old) => ({ ...old, ...newValue }))
  }

  const disabled = id === '' || id === undefined || id === null

  return (
    <Wrapper>
      <Content>
        <Item>
          <label>ID: {id}</label>
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
