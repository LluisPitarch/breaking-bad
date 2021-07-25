import { combineReducers } from 'redux';

import { characterReducer } from './character/charactersReducer';

// COMBINED REDUCERS
const appReducer = combineReducers({
  characters: characterReducer,
});

export default appReducer;
