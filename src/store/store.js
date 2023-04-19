import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './modules/userInfo'


export default configureStore({
    reducer : {
        userInfo : userInfoReducer
    }
})