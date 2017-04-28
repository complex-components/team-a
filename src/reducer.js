import {Map, List} from 'immutable';

const posts = 'posts';
const feedback = 'feedback';
const user = 'user';
const init = Map({user: {}, posts: [{"id": 1, "type": "post"}], feedback: List});

export default function (state = init, action) {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return state;
        case 'UPDATE_LOGINFORM':
            console.log('action.payload ', action.payload);
            var newState = state.setIn(user, action.payload);
            console.log('name' , newState.get('name'));
            return newState;
        default:
            return state;
    }
}