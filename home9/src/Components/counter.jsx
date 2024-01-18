import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCounter } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <div>
      <h1>Counter Component</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;