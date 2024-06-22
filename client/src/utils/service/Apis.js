import axios from "axios"
import {USER_URL } from "./API_URL"
import { message } from "antd";

export const getUserRegister = async (data) => {
    try {
        const getUserRegisterResponse = await axios.post(`${USER_URL}/register`, data);
        console.log(getUserRegisterResponse);
        return getUserRegisterResponse; // Ensure the function returns the response
    } catch (error) {
        console.log(error);
        console.log(message.error)
        message.error("User registration failed");
    }
};

export const getUserLogin = async (data) => {
    try {
        const loginResponse = await axios.post(`${USER_URL}/login`, data)
        return loginResponse
    } catch (error) {
        console.log(message.error)
        message.error(`something went wrong`)
    }
}

export const getUserinfo = async (token) => {
    try {
        const response = await axios.post(`${USER_URL}/getUserData`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(message.error)
        message.error(`something went wrong`)
    }
}



// export const AddNewBooks = async()=>{
//     try {
//         const newBooksResponse = await axios.post(`${BOOKS_API}/new-books`,{},{
//             headers:{
//                 //  Authorization: `Bearer ${token}`
//             }
//         })
//     } catch (error) {
        
//     }
// }