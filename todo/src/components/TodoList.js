import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';





const TodoList = () => {

    const [{editing, item}, dispatch] = useReducer(reducer, initialState)



    return (
        <div>
            {!editing ? (
                <div>
                    <h1>To Do List</h1>
                    <h4>{item}</h4>
                </div>
            ) : (
                <div>
                    <input></input>
                </div>
            )}
        </div>
    )
}

export default TodoList;