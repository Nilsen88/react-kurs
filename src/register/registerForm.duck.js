import {createAction, handleActions} from 'redux-actions';

const namespace = 'registerForm/';
const createNsAction = (action, payload) => createAction(namespace+action, payload);
export const getState = (globalState) => globalState.registerForm || {};

export const getFirstName = (state) => state.firstName || '';
export const getLastName = (state) => state.lastName || '';
export const getDateOfBirth = (state) => {
    const dob = state.dateOfBirth;
    return dob ? new Date(dob) : new Date();
}
export const getUserName = (state) => state.userName || '';
export const getEmail = (state) => state.email || '';
export const getAvatarImgSrc = (state) => state.avatarImgSrc || '';


export const setFirstname = createNsAction('SET_FIRST_NAME', (name = '') => name);
export const setLastname = createNsAction('SET_LAST_NAME', (name = '') => name);
export const setDateOfBirth = createNsAction('SET_DATE_OF_BIRTH', (name = '') => name);
export const setUserName = createNsAction('SET_USER_NAME', (name = '') => name);
export const setEmail = createNsAction('SET_EMAIL', (name = '') => name);
export const setAvatarImgSrc = createNsAction('SET_AVATAR_IMG_SRC', (name = '') => name);
export const onReset = createNsAction('ON_RESET');


export const reducer = handleActions({
    [setFirstname]: (state, {payload}) => {
        return {
            ...state,
            firstName: payload
        };
    },
    [setLastname]: (state, {payload}) => {
        return {
            ...state,
            lastName: payload
        };
    },
    [setDateOfBirth]: (state, {payload}) => {
        return {
            ...state,
            dateOfBirth: payload
        }
    },
    [setUserName]: (state, {payload}) => {
        return {
            ...state,
            userName: payload
        }
    },
    [setEmail]: (state, {payload}) => {
        return {
            ...state,
            email: payload
        }
    },
    [setAvatarImgSrc]: (state, {payload}) => {
        return {
            ...state,
            avatarImgSrc: payload
        }
    },
    [onReset]: (state, {payload}) => {
        return {
            ...state,
            firstName: '',
            lastName: '',
            dateOfBirth: new Date(),
            userName: '',
            email: '',
            avatarImgSrc: ''
        }
    }
}, {});

export default reducer;



