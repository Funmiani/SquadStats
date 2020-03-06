import {ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';
import {createCharacter} from './helpers';


function heroes(state = [], action) {
    let heroes;
    switch(action.type) {
        case ADD_CHARACTER:
         heroes = [...state, createCharacter(action.id)];
        break;
        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id);
        break;
        default:
            return state;
    }
    return heroes;
}
export default heroes;