import { createStore } from 'redux';

const reducer = (initialState, action) => {
  return initialState
}

const configStore = initialState => {
  return createStore(() => reducer(initialState));
}

export default configStore;