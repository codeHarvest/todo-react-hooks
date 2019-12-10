import React,{ useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm.component';
import Todo from './components/Todo.component';

function App() {

  const [todos, setTodos] = useState([
    {text : 'Learn about hooks', description : 'read react docs section on hooks'},
    {text : 'make something using hooks', description :'make a simple todo app using hooks'},
    {text : 'submit task', description : 'submit task to get to next round'}
]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="App">
    <h1 className="title">Todo</h1>
      <div className="todo-list">
        {
          todos.map((todo, index) => <Todo key={index} index={index} todo={todo}/> )
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
