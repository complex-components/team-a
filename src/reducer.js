import {Map, List} from 'immutable';

const posts = 'posts';
const feedback = 'feedback';
const user = 'user';
const init = Map({user: {}, posts: [{"id": 1, "type": "post"}], feedback: List});

export default function (state = init, action) {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return state;
        case 'LOGIN_USER':
            return state.set(user, action.payload);
        default:
            return state;
    }
}