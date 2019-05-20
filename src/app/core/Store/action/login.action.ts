import { Action } from '@ngrx/store';

import { Userinfo } from '../model/login.model';

export enum LoginActionTypes {
  USER_LOGIN = '[Login] User Login'
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.USER_LOGIN;

  constructor(readonly payload: Userinfo) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = LoginAction;