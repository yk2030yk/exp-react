import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'

import ExperimentPage from '@/containers/pages/experiment/ExperimentPage'

const Routes: React.FC = () => {
  return (
    <Switch>
      <AppRoute exact path="/experiment" component={ExperimentPage} />
    </Switch>
  )
}

export default Routes
