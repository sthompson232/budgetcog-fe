import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index'
 
const persistConfig = {
    key: 'root',
    storage: storage,
  };
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)

export { persistor, store }
