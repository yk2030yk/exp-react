import React from 'react'

import { styled } from '@/styles'

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #9aa6e0;
`

type Props = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Page: React.FC<Props> = ({ name, setName }) => (
  <Wrapper>
    <p>ChildComponent1-C</p>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </Wrapper>
)

export default Page
