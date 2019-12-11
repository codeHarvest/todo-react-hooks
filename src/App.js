import React,{ useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm.component';
import Todo from './components/Todo.component';
import Button from './components/Button.component';

function App() {

  const [todos, setTodos] = useState([
    {text : 'Learn about hooks', description : 'read react docs section on hooks', isCompleted: false},
    {text : 'make something using hooks', description :'make a simple todo app using hooks', isCompleted: false},
    {text : 'submit task', description : 'submit task to get to next round', isCompleted: false}
]);

  const [show, setShow] = useState(false);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
}



  return (
    <div className="App">
      <Button handleClick={handleClick}/>
      <div className="todo-list">
        {
          todos.map((todo, index) => <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/> )
        }
      <TodoForm addTodo={addTodo} show={show}/>
      </div>
    </div>
  );
}

export default App;
