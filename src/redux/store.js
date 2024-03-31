import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer'


const store = configureStore({
    reducer
})

export default store;

// import { createStore } from "redux";
// import reducer from "./reducer";
// import initialState from "./initialState";
// const store = createStore(reducer, initialState);

// // store.dispatch({ type: 'increment', payload: 1 })

// // console.log(store.getState());

// export default store;
























//

// import { configureStore, } from '@reduxjs/toolkit';
// import { presistedClicksReducer } from './userSlice';
// import {
//     persistStore,
//     // persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'

// export const store = configureStore({
//     reducer: {
//         clicks: presistedClicksReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),


// });


// export const persistor = persistStore(store)

// export default store;