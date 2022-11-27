import { FETCH_STORIES } from "../actions";





const reducer = function (state=[], action) {
    switch (action.type) {
        case FETCH_STORIES:
                console.log('payload', action.payload)
                
                return action.payload
                default: return state;
    }
}

export default reducer