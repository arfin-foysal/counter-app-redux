import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from  '../components/Counter/Action/Action'
import { decrementTwo, incrementTwo } from '../components/CounterTwo/ActionTwo/Actiontwo'
const Counter = () => {
    const count = useSelector(state => state.Reducer.countOne)
    const counttwo = useSelector(state => state.ReducerTwo.countTwo)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count={count}</h2>
            <h2>Count={counttwo}</h2>
            <button onClick={()=>dispatch(increment())} >increment</button>
            <button onClick={()=>dispatch(decrement())} >decrement</button>


            <button onClick={()=>dispatch(incrementTwo())} >incrementTwo</button>
            <button onClick={()=>dispatch(decrementTwo())} >decrementTwo</button>
            
        </div>
    )
}

export default Counter
