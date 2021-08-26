import {INCREMENT,DECREMENT} from '../Type'

const initialstate={
    countOne:0
}

 const Reducer =(state=initialstate,action)=>{
    switch (action.type) {
        case INCREMENT:
           return{
               ...state,
               countOne:state.countOne + 1
           }
        case DECREMENT:
           return{
               ...state,
               countOne:state.countOne - 1
           }
        default:
           return state
    }
}

export default Reducer