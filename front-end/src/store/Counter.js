
import { createStore } from 'redux';

const initState ={counter:0,showCounter:true}
const counterReduser = (state=initState,action)=>{
    if(action.type==="increase"){
        return {...state,counter:state.counter+action.payload.number}
    }else if (action.type==="decrease"){
        return {...state,counter:state.counter-action.payload.number}
    }else if (action.type==="toggle"){
        return {...state,showCounter : !state.showCounter}
    } else if (action.type==="zero"){
        return {...state,counter : 0}

    }
    return state
}
const store = createStore(counterReduser)
export default store