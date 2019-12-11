import React,{ useState } from 'react'

const TodoForm = ({ addTodo, show }) =>  {

    const [value, setValue]  = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return ;
        addTodo(value);
        setValue("");   
    }


    return (
        <div className="container">
        <div className="todo--c2">
            <form className={`${show ? 'show' : ''} create--form`} onSubmit={handleSubmit}>
                <input type="text" className="create--input" value={value} onChange={e =>  setValue(e.target.value)}/>
            </form>
        </div>
        </div>
        
    )
}



export default TodoForm;