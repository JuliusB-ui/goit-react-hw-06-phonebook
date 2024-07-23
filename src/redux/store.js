import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./contactSlice";
import {filterReducer} from "./filterSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer=persistReducer(persistConfig, combineReducers({contacts: contactsReducer, filter: filterReducer}))

export const store=configureStore({
    reducer: persistedReducer,

    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});
export const persistor=persistStore(store);