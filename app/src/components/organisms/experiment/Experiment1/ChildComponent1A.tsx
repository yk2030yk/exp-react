import React from 'react'

import ChildComponent1B from './ChildComponent1B'
import { styled } from '@/styles'

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #e2a8a8;
`

type Props = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Page: React.FC<Props> = ({ name, setName }) => (
  <Wrapper>
    <p>ChildComponent1-A</p>
    <ChildComponent1B name={name} setName={setName} />
  </Wrapper>
)

export default Page
