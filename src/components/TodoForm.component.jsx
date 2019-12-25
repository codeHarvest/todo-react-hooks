import React,{ useState, useEffect ,useRef } from 'react'

const TodoForm = ({ addTodo, show }) =>  {

    const inputRef = useRef();

    const [value, setValue]  = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return ;
        addTodo(value);
        setValue("");
    }
    
    useEffect(() => inputRef.current && inputRef.current.focus());

    return (
        <div className="container">
        <div className="todo--c2">
            <form className={`create--form`} onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} className={`${show ? 'show' : ''} create--input`} value={value} onChange={e =>  setValue(e.target.value)}/>
            </form>
        </div>
        </div>
        
    )
}



export default TodoForm;