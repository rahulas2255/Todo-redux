import { useDispatch } from 'react-redux';
import {removeTodo,toggleComplete} from '../redux/todoSlice'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div >
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span className='ms-2 text-dark fs-5'>{text}</span>
      </div>
      <span onClick={() => dispatch(removeTodo({id}))}> <i class="fa-solid fa-square-xmark text-danger fs-3"></i></span>
    </li>
  );
};

export default TodoItem;