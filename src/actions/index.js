export const selectLibrary = (libraryId) => {

  // NOTE: below is an action creator
  return {
    type: 'select_library',
    payload: libraryId
  }
}
