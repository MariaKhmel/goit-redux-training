import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterslice";
// import { decrement, increment } from "./redux/actions";

const Counter = () => {
  const total = useSelector((state) => state.counterReducer.total);
  const step = useSelector((state) => state.counterReducer.step);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment(Number(step)));
  const handleDecrement = () => dispatch(decrement(Number(step)));
  return (
    <>
      <div>
        <p>Counter</p>
        <p>{total}</p>
        <button type="button" onClick={handleIncrement}>
          +
        </button>
        <button type="button" onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
