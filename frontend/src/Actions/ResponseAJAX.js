export const successResponse = () => {
  return {
    type: 'SUCCESS_RESPONSE',
    response: "success"
  }
}

export const successDeleteEvent = () => {
  return {
    type: 'SUCCESS_DELETE_EVENT',
    response: "success"
  }
}

export const successAddCollab = () => {
  return {
    type: 'SUCCESS_ADD_COLLAB',
    response: "success"
  }
}

export const failAddCollab = () => {
  return {
    type: 'FAIL_ADD_COLLAB',
    response: "fail add collab"
  }
}
