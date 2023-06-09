import {
  BUTTON_ONE_CLICK_FIRST_TIME,
  BUTTON_ONE_CLICK_SECOND_TIME
} from '../actions/container-buttons';


const initialStateButton = {
  stateStyle: false,
};

export const buttonOneClickReducer = (state = initialStateButton, action) => {
  switch (action.type) {
    case BUTTON_ONE_CLICK_FIRST_TIME: {
      return {
        ...state,
        stateStyle: true,
      }
    }
    case BUTTON_ONE_CLICK_SECOND_TIME: {
      return {
        state,
        stateStyle: false,
      }
    }
    default: {
      return state;
    }
  }
}