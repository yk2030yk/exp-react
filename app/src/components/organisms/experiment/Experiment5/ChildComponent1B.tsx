import React from 'react'

import ChildComponent1C from './ChildComponent1C'
import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {
  name: string
  setName: (v: string) => void
}

const Page: React.FC<Props> = ({ name, setName }) => (
  <Wrapper>
    <p>ChildComponent1-B</p>
    <ChildComponent1C name={name} setName={setName} />
  </Wrapper>
)

export default Page
