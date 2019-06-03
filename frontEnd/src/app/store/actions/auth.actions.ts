import { Action } from '@ngrx/store';

export enum ActionTypes {
	USER_LOGIN = 'USER_LOGIN',
	USER_LOGOUT = 'USER_LOGOUT',
	USER_REGISTER = 'USER_REGISTER'
}

export class Login implements Action {
	readonly type =  ActionTypes.USER_LOGIN;
	constructor(public payload: { username: string; password: string }) { }
}

export class Logout implements Action {
	readonly type =  ActionTypes.USER_LOGOUT;
	constructor(public payload: { token: string; }) { }
}

export class Register implements Action {
	readonly type = ActionTypes.USER_REGISTER;
	constructor(public payload: { username: string; password: string }) { }
}
