import {Map} from 'immutable';


const init = Map({});

export default function (state = init, action) {
    switch (action.type) {
        default:
            return state;
    }
}