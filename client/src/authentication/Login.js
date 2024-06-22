import React from 'react'
import { CommonForm } from '../components/CommonForm'
import { getUserLogin } from '../utils/service/Apis'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

const Login = () => {
    const navigate = useNavigate()
    const onFinishHandler = async (values) => {
        console.log(values)
        try {
            const res = await getUserLogin(values)
            window.location.reload()
            console.log(res)
            if (res.data.success) {
                navigate('/')
                localStorage.setItem("token", res.data.token)
                message.success(res.data.message)
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            message.error(`something went wrong ${error.message}`)
        }
    }
    return (
        <CommonForm  
        onFinish={onFinishHandler} 
        minHeight='100vh'
        to="/register" 
        heading='Login' 
        SignIn="true" 
        Children="Don't have account ? SignUp"  
        type='submit'/>
    )
}

export default Login