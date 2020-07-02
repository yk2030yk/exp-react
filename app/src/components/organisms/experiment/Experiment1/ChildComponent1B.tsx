import React from 'react'

import ChildComponent1C from './ChildComponent1C'
import { styled } from '@/styles'

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #aedebb;
`

type Props = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Page: React.FC<Props> = ({ name, setName }) => (
  <Wrapper>
    <p>ChildComponent1-B</p>
    <ChildComponent1C name={name} setName={setName} />
  </Wrapper>
)

export default Page
