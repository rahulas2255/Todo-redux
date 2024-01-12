import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './redux/todoSlice';
import NewTodo from './Components/NewTodo';
import Todo from './Components/Todo';

import './App.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodo
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <Todo />
    </div>
  );
}

export default App;