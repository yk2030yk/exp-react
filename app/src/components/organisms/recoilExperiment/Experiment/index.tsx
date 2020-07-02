import React from 'react'

import { styled } from '@/styles'
import ProfileList from './ProfileList'
import AddButton from './AddButton'
import InputModal from './InputModal'

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

const Box = styled.div`
  margin-top: 20px;
`

const Components = styled.div``

const Page: React.FC = () => {
  return (
    <>
      <Wrapper>
        <p>ParentComponent</p>
        <Components>
          <Box>
            <AddButton />
          </Box>
          <Box>
            <ProfileList />
          </Box>
        </Components>
      </Wrapper>
      <InputModal />
    </>
  )
}

export default Page
