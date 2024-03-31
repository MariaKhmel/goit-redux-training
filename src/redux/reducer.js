import { createReducer } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { decrement, increment, setStep } from "./actions";

const reducer = createReducer(initialState.counter, (builder) => {
    builder
        .addCase([increment], (state, action) => {
            state.total += action.payload;
        })

        .addCase([decrement], (state, action) => {
            state.total -= action.payload;
        })
        .addCase([setStep], (state, action) => {
            state.step = action.payload;
        })

});

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


export default reducer;


















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