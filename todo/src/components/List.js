import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';





const List = ({state}) => {
    console.log(state, 'List state')

    return (
        <div>
            {state.todos.map(item => (
                <p>{item.item}</p>
            ))}
        </div>
    )
}

export default List;