import {} from 'react-redux'
import { State } from '..'

const profiles = (state: State) => state.profile.profiles
const selectedProfile = (state: State) => state.profile.selectedProfile

export default {
  profiles,
  selectedProfile,
}
