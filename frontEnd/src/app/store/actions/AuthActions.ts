import { Action } from '@ngrx/store';

export class Login implements Action {
	readonly type = 'USER_LOGIN';
	constructor(public payload: { username: string; password: string }) { }
}

export class Logout implements Action {
	readonly type = 'USER_LOGOUT';
	constructor(public payload: { token: string; }) { }
}

export class Register implements Action {
	readonly type = 'USER_REGISTER';
	constructor(public payload: { username: string; password: string }) { }
}
