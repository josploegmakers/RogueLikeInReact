import { 
    MOVE_PLAYER_UP,
    MOVE_PLAYER_DOWN,
    MOVE_PLAYER_LEFT,
    MOVE_PLAYER_RIGHT
} from './actions1';
import Data from './statedata';

const initialState = Data;

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case MOVE_PLAYER_UP:
            console.log(action.type + ' - ' + action.payload) //REMOVE OR COMMENT FOR FINAL BUILD
            return {...state, playerPosY: state.playerPosY + 1}
        case MOVE_PLAYER_DOWN:
            console.log(action.type + ' - ' + action.payload) //REMOVE OR COMMENT FOR FINAL BUILD
            return {...state, playerPosY: state.playerPosY - 1}
        case MOVE_PLAYER_LEFT:
            console.log(action.type + ' - ' + action.payload) //REMOVE OR COMMENT FOR FINAL BUILD
            return {...state, playerPosY: state.playerPosX - 1}
        case MOVE_PLAYER_RIGHT:
            console.log(action.type + ' - ' + action.payload) //REMOVE OR COMMENT FOR FINAL BUILD
            return {...state, playerPosY: state.playerPosX + 1}
        default:
            return state;
    }
}