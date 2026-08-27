import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
const count = useSelector(
(state) => state.counter.value
);

const dispatch = useDispatch();

return (

    <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>
plus
</button>

<button onClick={() => dispatch(decrement())}>
minus
</button>

<button onClick={() => dispatch(reset())}>
reset
</button>
</div>
);
}
