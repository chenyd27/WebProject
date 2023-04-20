import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user : {
        username : 'cyd',
        //password : '',
        token : '',
        user_id : 1,
        email : 'yic192@pitt.edu',
        first_name : 'Yida',
        last_name : 'Chen',
        phone : '4123542755',
        create_at : '2023-04-18 18:00:00',
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