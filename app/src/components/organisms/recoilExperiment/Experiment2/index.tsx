import React from 'react'

import { styled } from '@/styles'
import ProfileList from './ProfileList'
import AddButton from './AddButton'
import InputArea from './InputArea'
import { Provider } from 'react-redux'
import { store } from './store'

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

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Components = styled.div``

const Page: React.FC = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <p>ParentComponent</p>
        <Components>
          <Box>
            <AddButton />
          </Box>
          <Columns>
            <Box>
              <InputArea />
            </Box>
            <Box>
              <ProfileList />
            </Box>
          </Columns>
        </Components>
      </Wrapper>
    </Provider>
  )
}

export default Page
