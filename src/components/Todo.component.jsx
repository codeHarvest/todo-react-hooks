import React from 'react'

const Todo = ({ todo, completeTodo, index }) => {
    return (
        <div className="todo" style={{ textDecoration : todo.isCompleted ? "line-through" : "" }}>
            <input type="radio" onClick={() => completeTodo(index)}/>
            <p>
                {todo.text}
                {/* <span className="information">i</span> */}
            </p>
        </div>
    )
}


export default Todo;