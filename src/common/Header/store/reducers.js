import {fromJS} from 'immutable'
const defaultState = fromJS({
    stuta:'123'
})

export default (state=defaultState,action)=>{
    switch (action.type){
        default:
            return state
    }
}