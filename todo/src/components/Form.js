import React, {useState} from 'react'

const Form = ({ dispatch }) => {
    const [todo, setTodo] = useState('')
    const handleChanges = e => {
        setTodo(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
    }
    return (
        <form onSubmit={submitForm}>
            <input type='text' name='task' value={todo} onChange={handleChanges}></input>
            <button type='submit'>Add item</button>
        </form>
    )
}

export default Form;