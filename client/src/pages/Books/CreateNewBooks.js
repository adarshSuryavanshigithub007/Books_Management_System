import React from 'react'
import Wrapper from '../../utils/service/wrapper/Wrapper'
import { CommonForm } from '../../components/CommonForm'
import { AddNewBooks } from '../../utils/service/Apis';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const CreateNewBooks = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    console.log(token)
    const handleSubmitForm = async (values) => {
        console.log('submit form', values)
        try {
            const resp = await AddNewBooks({ token, values })
            if (resp.success) {
                message.success(resp.message)
                navigate('/')
            } else {
                message.error(resp.data.message)
            }
        } catch (error) {
            message.error(`something went wrong ${error.message}`)
        }

    }
    return (
        <Wrapper>
            <CommonForm
                onFinish={handleSubmitForm}
                minHeight='50%'
                SignUp='false'
                SignIn='false'
                heading='Add New Book'
                type='submit'
            />
        </Wrapper>
    )
}

export default CreateNewBooks