import  {combineReducers} from 'redux'
import meetingReducer from './meetingReducer'


const reducers = combineReducers({
    meetings : meetingReducer
})

export default reducers