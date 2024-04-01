import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { rootReducer } from "./reducer";



const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)
























// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { toDoReducer } from './reducer'
// import { counterReducer } from "./counterslice";
// import persistStore from "redux-persist/es/persistStore";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const reducer = combineReducers({
//     counterReducer,
//     toDoReducer,
// })


// const persistedReducer = persistReducer(persistConfig, reducer)



// const store = configureStore({
//     reducer: persistedReducer
// })
// export const persistor = persistStore(store)
// export default store;

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