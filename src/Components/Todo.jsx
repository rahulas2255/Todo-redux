import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';

const Todo = () => {
    const todos = useSelector(state => state.todos.todos);
    const [todoCount, setTodoCount] = useState(0);
    useEffect(()=>{
      let count = 0;
      todos.forEach((item)=>{
        if (item.completed) {
          count++;
        }
      });
      setTodoCount(count)

    }, [todos]);

  return (
    <>
    <div className='d-flex flex-column  align-items-center mt-5'>
    <ul style={{width:'500px'}} className='list-group border '>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>

    <h4 className='mt-5'>Completed Todo's: {todoCount}</h4>

    </div>
    
    </>
  );
};

export default Todo;