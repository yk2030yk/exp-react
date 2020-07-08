import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import Experiment from '@/components/organisms/recoilExperiment/Experiment'
import Experiment2 from '@/components/organisms/recoilExperiment/Experiment2'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Content>
      <S.Box>
        <Experiment />
      </S.Box>
      <S.Box>
        <Experiment2 />
      </S.Box>
    </S.Content>
  </DefaultTemplate>
)

export default Page
