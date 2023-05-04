import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActiveCreator} from "../../../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActiveCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;