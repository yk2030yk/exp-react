import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'

import ExperimentPage from '@/containers/pages/experiment/ExperimentPage'
import RecoilExperimentPage from '@/containers/pages/recoil/RecoilExperimentPage'

const Routes: React.FC = () => {
  return (
    <Switch>
      <AppRoute exact path="/experiment" component={ExperimentPage} />
      <AppRoute
        exact
        path="/experiment/recoil"
        component={RecoilExperimentPage}
      />
    </Switch>
  )
}

export default Routes
