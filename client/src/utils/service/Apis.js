import axios from "axios"
import { BOOKS_URL, USER_URL } from "./API_URL"
import { message } from "antd";
import { cache } from 'react'
export const getUserRegister = async (data) => {
    try {
        const getUserRegisterResponse = await axios.post(`${USER_URL}/register`, data);
        console.log(getUserRegisterResponse);
        return getUserRegisterResponse;
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
        console.error(error);
        throw error;
    }
}

export const getAllBooks = async (token, onProgress) => {
    try {
        const response = await axios.get(`${BOOKS_URL}/books`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            onDownloadProgress: (progressEvent) => {
                if (onProgress) {
                    const total = parseInt(progressEvent.total, 10);
                    const current = parseInt(progressEvent.loaded, 10);
                    const percent = Math.round((current / total) * 100);
                    console.log("percent", percent)
                    onProgress(percent);
                }
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
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
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getEditBook = async (token, id, data, onProgress) => {
    console.log("edit book", token, id, data);
    try {
        const response = await axios.put(`${BOOKS_URL}books/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            onDownloadProgress: (progressEvent) => {
                if (onProgress) {
                    const currentProgress = parseInt(progressEvent.total, 10);
                    const totalProgress = parseInt(progressEvent.total, 10)
                    const percent = Math.round((currentProgress / totalProgress) * 100)
                    console.log(percent)
                    onProgress(percent)
                }
            }
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getBookDetails = async (token, id) => {
    try {
        const response = await axios.get(`${BOOKS_URL}books/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

