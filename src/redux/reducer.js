import { createReducer, createSlice } from "@reduxjs/toolkit";
// import { addTask, deleteTask, setStatusFilter, toggleCompleted } from "./actions";
import { statusFilters } from "./constatnts";
import { nanoid } from "nanoid"

export const initialState = {
    tasks: [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
    ],
    filters: {
        status: statusFilters.all,
    },
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.tasks.push(action.payload)
            },

            prepare(text) {
                return {
                    payload: {
                        text,
                        completed: false,
                        id: nanoid(),
                    }
                }
            }
        },
        setStatusFilter(state, action) {
            state.filters.status = action.payload

        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)

        },
        toggleCompleted(state, action) {
            for (const task of state.tasks) {
                if (task.id === action.payload) {
                    task.completed = !task.completed
                    break;
                }
            }

        }

    }
})

export const rootReducer = tasksSlice.reducer;
export const { addTask, setStatusFilter, deleteTask, toggleCompleted } = tasksSlice.actions;



// export const rootReducer = createReducer(initialState, builder => {
//     builder.addCase(addTask.type, (state, action) => {
//         state.tasks.push(action.payload)

//     })
//         .addCase(setStatusFilter.type, (state, action) => {
//             state.filters.status = action.payload

//         })
//         .addCase(deleteTask.type, (state, action) => {
//             state.tasks = state.tasks.filter(task => task.id !== action.payload)

//         })
//         .addCase(toggleCompleted.type, (state, action) => {
//             for (const task of state.tasks) {
//                 if (task.id === action.payload) {
//                     task.completed = !task.completed
//                     break;
//                 }
//             }

//         })
// })



// export const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case addTask.type:
//             return {
//                 ...state,
//                 tasks: [...state.tasks, action.payload]
//             }

//         case setStatusFilter.type:
//             return {
//                 ...state,
//                 filters: { ...state.filters, status: action.payload }
//             }

//         case deleteTask.type:
//             return {
//                 ...state,
//                 tasks: state.tasks.filter(task => task.id !== action.payload)
//             }

//         case toggleCompleted.type:
//             return {
//                 ...state,
//                 tasks: state.tasks.map(task => {
//                     if (task.id !== action.payload) {
//                         return task;
//                     }
//                     return {
//                         ...task,
//                         completed: !task.completed
//                     }
//                 })
//             }


//         default:
//             return state;
//     }
// }






















// import { createReducer } from "@reduxjs/toolkit";
// import initialState from "./initialState";
// import { decrement, increment, setStep, createTodo } from "./actions";

// export const reducer = createReducer(initialState.counter, (builder) => {

//     builder
//         .addCase(increment, (state, action) => {
//             state.total += action.payload;
//         })

//         .addCase(decrement, (state, action) => {
//             state.total -= action.payload;
//         })
//         .addCase(setStep, (state, action) => {
//             state.step = action.payload;
//         })

// });

// export const toDoReducer = createReducer(initialState.todo, (builder) => {
// builder.addCase(createTodo, (state, action) => {
// return {
//     ...state,
//     todo: [...state.todo, { ...action.payload }]
// }
//     builder.addCase(createTodo, (state, action) => (
//         state.todo.puch(action.payload)
//     ))
// })



// const reducer = createReducer(initialState.counter, {
//     [increment]: (state, action) => ({
//         ...state, total: state.total + action.action.payload
//     }),

//     [decrement]: (state, action) => ({
//         ...state, total: state.total - action.payload
//     }),
//     [setStep]: (state, action) => ({
//         ...state,
//         step: action.payload
//     })


// })





















// import { combineReducers } from "redux";
// import initialState from "./initialState";
// import { INCREMENT, DECREMENT, SETSTEP } from "./types"

// const counterReducer = (state = initialState.counter, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state, total: state.total + action.payload
//             }
//         case DECREMENT:
//             return {
//                 ...state, total: state.total - action.payload
//             }
//         case SETSTEP:
//             return {
//                 ...state,
//                 step: action.payload
//             }

//         default:
//             return state;
//     }
// };

// const todoReducer = (state = initialState.todo, action) => {
//     switch (action.type) {
//         case 'createTodo':
//             return {
//                 ...state,
//                 todo: [...state.todo, { ...action.payload }]
//             }

//         default:
//             return state;
//     }
// };


// const reducer = {
//     counter: counterReducer,
//     todo: todoReducer,
// }

// export default reducer;