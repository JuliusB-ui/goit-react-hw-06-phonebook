import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./contactSlice";
import {filterReducer} from "./filterSlice";
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from "redux-persist";


export const store=configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

    // middleware: getDefaultMiddleware => getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     }
    // })
});
// export const persistor=persistStore(store);