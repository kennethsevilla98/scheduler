


const initialState = {
   isLoading: false,
   data : []

};

export default function(state = initialState, action) {
    switch(action.type) {
        case "meeting_loading":
            return {
                ...state,
                isLoading: true
            };
        case "meeting_loaded":
            return {
                ...state,
                isLoading: false,
                data: action.payload,            
            };
        default:
            return state;
    }
}