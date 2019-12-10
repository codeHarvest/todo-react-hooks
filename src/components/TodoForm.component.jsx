import React,{ useState } from 'react'

const TodoForm = ({ addTodo }) =>  {

    const [value, setValue]  = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return ;
        addTodo(value);
        setValue("");
    }

    return (
        <div className="todo--create">
            <form className="create--form" onSubmit={handleSubmit}>
                <input type="text" className="create--input" value={value} onChange={e =>  setValue(e.target.value)}/>
            </form>
        </div>
    )
}



export default TodoForm;