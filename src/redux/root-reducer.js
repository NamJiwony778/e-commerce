import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import { persistReducer } from 'redux-persist';
//use localStorage
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/lib/persistStore';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);