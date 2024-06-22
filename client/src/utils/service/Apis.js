import axios from "axios"
import { BOOKS_URL, USER_URL } from "./API_URL"
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

export const AddNewBooks = async ({ values, token }) => {
    console.log(token)
    try {
        const newBooksResponse = await axios.post(`${BOOKS_URL}/new-books`, { ...values }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(newBooksResponse)
        return newBooksResponse.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllBooks = async (token) => {
    try {
        const AllBooksResponse = await axios.get(`${BOOKS_URL}/books`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(AllBooksResponse)
        return AllBooksResponse.data
    } catch (error) {
        console.log(error)
    }
}

export const getDeleteBook = async (token, id) => {
    console.log(id)
    try {
        const response = await axios.delete(`${BOOKS_URL}books/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        return response.data
        // 
    } catch (error) {
        console.log(error)
    }
}

export const getEditBook = async (token, id, data) => {
    console.log("edit book", token, id, data); // Check console log for correct values
    try {
        const response = await axios.put(`${BOOKS_URL}books/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data); // Log response data for debugging
        return response.data;
    } catch (error) {
        console.error(error); // Log error for debugging
        throw error; // Throw error to handle it in calling function
    }
};