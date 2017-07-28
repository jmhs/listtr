import axios from 'axios'

// Send new navigation path to store --> To be used for conditional rendering of relevant component
export const updateNavPath = (state) => {
  return {
    type: "UPDATE_NAVPATH",
    state
  }
}
