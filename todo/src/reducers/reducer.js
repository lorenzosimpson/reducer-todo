export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
        }
    ]
    
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
        const todo = {
            item: action.payload,
            completed: false,
            id: Date.now()
        };
        return {
            ...state,
            todos: [...state.todos, todo]
        }
        case 'TOGGLE_COMPLETED':
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        console.log(action.payload)
                        if(todo.id === action.payload.id) {
                            return {...todo, completed: !todo.completed}
                        } else {
                            return todo;
                        }
                    })
                }                     
        default:
            return state;
        }
}