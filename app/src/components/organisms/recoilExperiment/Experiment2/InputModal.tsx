import React from 'react'

import { styled } from '@/styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  profileWithIdState,
  selectedId,
  Profile,
  modalState,
} from './recoil/name'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Content = styled.div`
  height: 400px;
  width: 500px;
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
    height: 200px;
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
  const [modal, setModal] = useRecoilState(modalState)
  const id = useRecoilValue(selectedId)
  const [profile, setProfile] = useRecoilState(profileWithIdState(id))

  const handleChange = (newValue: Partial<Profile>) => {
    setProfile((old) => ({ ...old, ...newValue }))
  }

  return (
    <>
      {modal && (
        <Wrapper onClick={() => setModal(false)}>
          <Content onClick={(e) => e.stopPropagation()}>
            <Item>
              <label>名前を入力</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange({ name: e.target.value })}
              />
            </Item>
            <Item>
              <label>強みを入力</label>
              <textarea
                value={profile.strengths}
                onChange={(e) => handleChange({ strengths: e.target.value })}
              />
            </Item>
          </Content>
        </Wrapper>
      )}
    </>
  )
}

export default Page
