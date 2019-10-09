import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';





const List = ({state, dispatch, todo}) => {
    
    const toggleTodo = (todo) => {
        dispatch({type: 'TOGGLE_COMPLETED', payload: todo})
    }

    const clearCompleted = () => {
        dispatch({ type: 'CLEAR_COMPLETED'})
    }
    
    return (
        <div className='list'>
            {state.todos.map(item => (
                <div className={item.completed ? 'list-item-completed' : 'list-item'}>
                    <h1 onClick={() => toggleTodo(item)}>{item.item}</h1>
                </div>
                
            ))}
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default List;