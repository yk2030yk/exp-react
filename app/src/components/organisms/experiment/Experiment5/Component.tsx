import React from 'react'

import { useAppDispatch, useAppSelector } from './store'
import ChildComponent1A from './ChildComponent1A'
import ChildComponent2A from './ChildComponent2A'
import { styled } from '@/styles'
import { actions, selectors } from './store/name'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  background-color: #fff;
  width: 1000px;

  p {
    margin-bottom: 20px;
    font-weight: 600;
  }
`

const Components = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

const Page: React.FC = () => {
  const name = useAppSelector(selectors.name)
  const dispatch = useAppDispatch()
  const setName = (n: string) => dispatch(actions.setName(n))
  return (
    <Wrapper>
      <p>ParentComponent</p>
      <Components>
        <ChildComponent1A name={name} setName={setName} />
        <ChildComponent2A name={name} />
      </Components>
    </Wrapper>
  )
}

export default Page
