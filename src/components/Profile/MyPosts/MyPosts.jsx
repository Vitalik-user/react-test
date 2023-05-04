import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount}/>);

    let newPostElement = React.useRef(null);

    let addPost = () => {
        props.addPost();
    }

    let onChangePost = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onChangePost}
                          ref={newPostElement}
                          value = {props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>

}
export default MyPosts;