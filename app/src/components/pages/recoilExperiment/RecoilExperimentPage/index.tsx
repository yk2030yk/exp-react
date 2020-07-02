import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import Experiment from '@/components/organisms/recoilExperiment/Experiment'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Content>
      <S.Box>
        <Experiment />
      </S.Box>
    </S.Content>
  </DefaultTemplate>
)

export default Page
