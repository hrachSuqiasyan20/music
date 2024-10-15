import {createStore} from 'redux'
const store = createStore(function (state,action){
    if (action.type === 'EDIT_MOVIE_NAME'){
        return{
            currentMovie:{
                name:action.payload.name
            }
        }
    }
    return state
},{
    currentMovie:{
        name:''
    }
})

export default store