import {INCREMENT_TWO,DECREMENT_TWO} from '../Type'


export const incrementTwo =()=>{
    return{
        type:INCREMENT_TWO,
        payload:5
    }
}
export const decrementTwo =()=>{
    return{
        type:DECREMENT_TWO,
        payload:2
    }
}