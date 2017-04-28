import {Map, List} from 'immutable';

const posts = 'posts';
const feedback = 'feedback';
const user = 'user';
const init = Map({user: Map(), posts: List([]), feedback: List});

export default function (state = init, action) {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return state;
        case 'UPDATE_LOGINFORM':
            return state.setIn([user, 'name'], action.payload.name);
        case 'ADD_ARTICLE':
            let newArticle = action.payload;
            newArticle.id = state.get('posts').length +1;
            return state.set(posts, state.get(posts).push(newArticle));
        default:
            return state;
    }
}