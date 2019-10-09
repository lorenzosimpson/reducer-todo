import React, {useState} from 'react'

const Form = ({ dispatch }) => {
    const [todo, setTodo] = useState('')
    const handleChanges = e => {
        setTodo(e.target.value)
    }
    
    const addItem = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
    }
    return (
        <form className='form'>
            <input type='text' name='task' value={todo} onChange={handleChanges}></input>
            <button onClick={addItem}>Add item</button>
        </form>
    )
}

export default Form;