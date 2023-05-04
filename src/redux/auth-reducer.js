import {authAPI, userAPI} from "../api/api";
import {setCurrentPage, setUsers, toggleIsFetching} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialStore = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, login, email}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

export default authReducer;