export const CreateEvents = (events) => {
  return {
    type: 'CREATE_EVENTS',
    events
  }
}

export const PopulateGuests = (guests) => {
  return {
    type: 'POPULATE_GUESTS',
    guests
  }
}
