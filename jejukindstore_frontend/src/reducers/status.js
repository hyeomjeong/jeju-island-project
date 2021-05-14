import * as stautsActions from '../actions/status';

const initialStates = {
  status: false,
}

const reducers = (state = initialStates, actions) => {
  const { type } = actions;
  switch (type) {
    case stautsActions.SIGN_IN: {
      return {
        ...state,
        status: true,
      }
    }
    case stautsActions.SIGN_OUT: {
      return {
        ...state,
        status: false,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default reducers;