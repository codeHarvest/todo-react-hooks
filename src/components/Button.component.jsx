import React from 'react'


 const Button = ({ handleClick }) => {
    return (
        <div className="todo--c1">
            <h1 className="title">Todo</h1>
            <button onClick={handleClick} className="btn">+</button>
        </div>
    )
}


export default Button;