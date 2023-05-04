import React from 'react'
import style from './Users.module.css';
import userFoto from '../../assets/image/userFoto.png'
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p);
                }} className={props.currentPage === p && style.selectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userFoto} alt={''}
                                 className={style.fotoUser}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((id) =>id === u.id)} onClick={() => {
                                props.unfollow(u.id);}}>
                                Unollow</button>
                            : <button disabled={props.followingInProgress.some((id) =>id === u.id)} onClick={() => {
                                props.follow(u.id);}}>
                                Follow</button>
                        }
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.country"}</div>
                    <div>{"u.city"}</div>
                </div>
            )}

    </div>


}

export default Users;