const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialStore = {
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
};

export const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActiveCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer;