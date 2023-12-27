'use client'
import { counterSelector } from "@/store/slices/counterSlice"
import { useSelector } from "react-redux"
import { decrement, increment , incrementByAmount ,incrementAsync} from "@/store/slices/counterSlice"
import { useDispatch } from "react-redux"
const Counter = () => {
    const counterReducer = useSelector(counterSelector);
    // const dispatch = useAppDispatch();
    const dispatch = useDispatch();

    return (
        <div>
            counter from Counter component : {counterReducer.counter}            
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                ||
                <button onClick={() => dispatch(increment())}>Increment</button>
                ||
                <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
                ||
                <button onClick={() => dispatch(incrementAsync(3))}>IncrementAsync by 3</button>  
            </div>
        </div>
    )
}

export default Counter;