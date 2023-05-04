import React from 'react';
import s from "./FriendsOnline.module.css";

const FriendsOnline = (props) => {
    return (
        <div className={s.item}>
            <div>
                <h3>FRIENDS</h3>
            </div>
            <div className={s.itemName}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                </div>
                <div>
                    <p>Vitalii</p>
                </div>
            </div> <div className={s.itemName}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                </div>
                <div>
                    <p>Vitalii</p>
                </div>
            </div> <div className={s.itemName}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                </div>
                <div>
                    <p>Vitalii</p>
                </div>
            </div>
        </div>
    )
}
export default FriendsOnline;
