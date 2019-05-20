import { Userinfo } from '../model/login.model';
import { Actions, LoginActionTypes } from '../action/login.action';

export interface State {
  username: string,
  password: string
};

export const initialState: State = {
  username: '',
  password: ''
};

export function loginReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case LoginActionTypes.USER_LOGIN: {
      const userInfo = action.payload;
      return {
        username: userInfo.username,
        password: userInfo.password
      };
    }
    default: {
      return state;
    }
  }
}