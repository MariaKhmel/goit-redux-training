import { createAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

// export const addTask = text => {
//     return {
//         type: 'tasks/addTask',
//         payload: {
//             text,
//             completed: false,
//             id: nanoid(),
//         }
//     }
// }

export const addTask = createAction('tasks/addTask', (text) => {
    return {
        payload: {
            text,
            completed: false,
            id: nanoid(),
        }
    }
})

// export const deleteTask = (taskId) => {
//     return {
//         type: 'tasks/deleteTask',
//         payload: taskId,
//     }
// }

export const deleteTask = createAction('tasks/deleteTask')

// export const toggleCompleted = (taskId) => {
//     return {
//         type: 'tasks/toggleCompleted',
//         payload: taskId,
//     }
// }

export const toggleCompleted = createAction('tasks/toggleCompleted');

// export const setStatusFilter = (value) => {
//     return {
//         type: 'filters/setStatusFilter',
//         payload: value,
//     }
// }

export const setStatusFilter = createAction('filters/setStatusFilter');











// import { createAction } from '@reduxjs/toolkit'


// export const increment = (step) => ({
//     type: INCREMENT, payload: step
// })

// export const decrement = (step) => ({
//     type: DECREMENT, payload: step
// })

// export const setStep = (value) => ({ type: SETSTEP, payload: value })

// export const increment = createAction('INCREMENT')
// export const decrement = createAction('DECREMENT')
// export const setStep = createAction('SETSTEP')
// export const createTodo = createAction('CREATETODO',
//     () => {
//     return {
//         payload:
//     }
// }
// );