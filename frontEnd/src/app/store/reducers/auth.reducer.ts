import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes } from '../actions/auth.actions';

export const initialState: AuthState = {
    isLoggedIn: false,
};

export interface AuthState {
    isLoggedIn: boolean;
    token?: string;
}

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
	getAuthFeatureState,
	state => state.isLoggedIn
);

export function authReducer(state = initialState, action: Action): AuthState {
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return Object.assign({}, {
                ...state,
                isLoggedIn: true,
            });
        case ActionTypes.USER_LOGOUT:
            return Object.assign({}, {
                ...state,
                isLoggedIn: false,
            });
        case ActionTypes.USER_REGISTER:
            return state;

        default:
            return state;
    }
}

