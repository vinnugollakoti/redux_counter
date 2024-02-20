import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Action';

const Counter = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <center>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Like</button>
      <button onClick={() => dispatch(decrement())}>Unlike</button></center>
    </div>
  );
};

export default Counter;
