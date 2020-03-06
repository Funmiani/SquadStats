import characters_json from '../data/character.json';
import {ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';
import {createCharacter} from './helpers';


function characters (state = characters_json, action) {
    let characters;
    switch(action.type) {
        case ADD_CHARACTER:
            characters = state.filter(item => item.id !== action.id);
           
            break;
            case REMOVE_CHARACTER:
                characters = [...state, createCharacter(action.id)];
            break;
        default:
            return state; 
    }
    return characters;
}
export default characters;