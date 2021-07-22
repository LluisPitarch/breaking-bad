import { combineReducers } from 'redux';

import { charactersReducer } from './character/charactersReducer';

// COMBINED REDUCERS
const appReducer = combineReducers({
  characters: charactersReducer,
});

export default appReducer;
