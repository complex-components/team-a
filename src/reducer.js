import {Map, List} from 'immutable';

const posts = 'posts';
const feedback = 'feedback';
const comments = 'comments';
const user = 'user';
const init = Map({user: Map(), posts: List([{'id':1,'type':'post','message':'test'}]), comments: List([{'id':1,'postId':'1','message':'test'}]), feedback: List});

export default function (state = init, action) {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return state;
        case 'UPDATE_LOGINFORM':
            return state.setIn([user, 'name'], action.payload.name);
        case 'ADD_COMMENT':
            return state.get(comments).push(action.payload);
        default:
            return state;
    }
}