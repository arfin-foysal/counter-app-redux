import {INCREMENT_TWO,DECREMENT_TWO} from '../Type'

const initialstate={
    countTwo:0
}

 const ReducerTwo =(state=initialstate,action)=>{
    switch (action.type) {
        case INCREMENT_TWO:
           return{
               ...state,
               countTwo:state.countTwo + action.payload
           }
        case DECREMENT_TWO:
           return{
               ...state,
               countTwo: state.countTwo - action.payload
           }
        default:
           return state
    }
}

export default ReducerTwo