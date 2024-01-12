
const NewTodo = ({ value, updateText, handleAction }) => {
    return (
     <>
      <h1 className="fw-bolder text-primary">To Do List</h1>
      
      <label>
        <input
          className="rounded"
          placeholer='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button  className="btn btn-primary ms-3" onClick={handleAction}>Add todo</button>
      </label>
     </>
    );
  };
  
  export default NewTodo;