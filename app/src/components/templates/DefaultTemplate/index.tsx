import React from 'react'

import * as S from './index.styled'

const Template: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.ContentAreaWrapper>
      <S.ContentArea>{children}</S.ContentArea>
    </S.ContentAreaWrapper>
  </S.Wrapper>
)

export default Template
