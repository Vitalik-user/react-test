import React from 'react'
import style from './Users.module.css';
import * as axios from 'axios'
import userFoto from '../../assets/image/userFoto.png'


const Users_Function = (props) => {



    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            props.setUsers(response.data.items)
        });
        // props.setUsers([
        //     {
        //         id: 1,
        //         followed: false,
        //         fotos: 'https://img.championat.com/s/735x490/news/big/h/s/edinstvennoe-dosrochnoe-porazhenie-vitaliya-klichko_1626779308610535625.jpg',
        //         fullName: 'Vitalii',
        //         status: 'I am boss',
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 2,
        //         followed: true,
        //         fotos: 'https://img.championat.com/s/735x490/news/big/h/s/edinstvennoe-dosrochnoe-porazhenie-vitaliya-klichko_1626779308610535625.jpg',
        //         fullName: 'Artem',
        //         status: 'I am boss too',
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     },
        //     {
        //         id: 3,
        //         followed: false,
        //         fotos: 'https://img.championat.com/s/735x490/news/big/h/s/edinstvennoe-dosrochnoe-porazhenie-vitaliya-klichko_1626779308610535625.jpg',
        //         fullName: 'Stasik',
        //         status: 'I am boss too',
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     }
        // ]);
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userFoto} alt={''} className={style.fotoUser}/>
            </div>
            <div>
                {u.followed
                    ?  <button onClick={() =>{props.unfollow(u.id)}}>Unollow</button>
                    : <button onClick= { () =>{props.follow(u.id)}}>Follow</button>
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

export default Users_Function;