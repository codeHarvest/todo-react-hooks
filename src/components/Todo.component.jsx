import React from 'react'
import ReactTooltip from 'react-tooltip'

const Todo = ({ todo, completeTodo, index }) => {
    
    return (
        <div className="todo" style={{ textDecoration : todo.isCompleted ? "line-through" : "" }} data-tip={todo.description}>
            <ReactTooltip />
            <input type="radio" id="radio" onClick={() => completeTodo(index)}/>
            <label htmlFor="">
                {todo.text}
            </label>  
        </div>
    )
}


export default Todo;