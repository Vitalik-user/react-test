import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialStore = {
    posts: [
        {id: 1, message: "world", likesCount: 20},
        {id: 2, message: "Hello", likesCount: 15},
        {id: 3, message: "Hi", likesCount: 5}
    ],
    newPostText: "",
    profile: null,
    status:"Hello"
};

const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return{
                ...state,
                newPostText: action.newPostText
            }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPostTextActiveCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export const getProfile = (userID) => {
    return (dispatch) => {
        profileAPI.getProfile(userID).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(data => {
            dispatch(setStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;