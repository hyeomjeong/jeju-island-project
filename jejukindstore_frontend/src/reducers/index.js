import { combineReducers } from 'redux';

import status from './status';

// 다른 리듀서랑 결합 가능한
const rootReducer = combineReducers({
    status,
});

export default rootReducer;