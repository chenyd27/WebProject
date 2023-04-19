import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user : {
        username : 'unknown User',
        //password : '',
        token : '',
        userId : '',
        email : '',
        first_name : '',
        last_name : '',
        phone : '',
        create_at : '',
        update_at : '',
        avatar : 'http://localhost:3000/assets/touxiang.png',
        user_type : 1,
        user_status : 1,
        event_list : [],
        comment_list : []
    },
    user_jwt_token : ''
}
const userInfo = createSlice({
    name : 'userInfo',
    initialState,
    reducers : {
        updateUser(state,action){

        },
        logOut(state){

        },
    }
})

const userInfoReducer = userInfo.reducer;
const {updateUser, logOut} = userInfo.actions;

export {updateUser, logOut};
export default userInfoReducer;