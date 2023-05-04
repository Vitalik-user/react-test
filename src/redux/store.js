/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "world", likesCount: 20},
                {id: 2, message: "Hello", likesCount: 15},
                {id: 3, message: "Hi", likesCount: 5}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Dimych",
                    icon: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                },
                {
                    id: 2,
                    name: "Sveta",
                    icon: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                },
                {
                    id: 3,
                    name: "Vitalii",
                    icon: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                },
                {
                    id: 4,
                    name: "Serega",
                    icon: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                },
                {
                    id: 5,
                    name: "Pavlo",
                    icon: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                },
                {
                    id: 6,
                    name: "Valera",
                    icon: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU"/>
                }
            ],
            messages: [
                {id: 1, message: "hello"},
                {id: 2, message: "how are you?"},
                {id: 3, message: "Yo?"},
                {id: 4, message: "Yo?"},
                {id: 5, message: "Yo"}
            ],
            newMessageText: ""
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this.state);
    }
}

export default store;*/
