import React from 'react'
import { CommonForm } from '../components/CommonForm'

import { message } from 'antd'
import { getUserRegister } from '../utils/service/Apis'


const Register = () => {
    const onFinishHandler = async (values) => {
        const { confirmPassword, ...userWithoutConfirmPassword } = values;
        console.log(values, userWithoutConfirmPassword);

        if (values.password === values.confirmPassword) {
            try {
                const user = await getUserRegister(userWithoutConfirmPassword);
                console.log(user)
                if (user.data.success) {
                    message.success(user.data.message);
                } else {
                    message.error(user.data.message);
                }
            } catch (error) {
                console.log("Error registering user:", error);
                message.error(error.message);
            }
        } else {
            message.error("Password does not match confirmPassword");
        }
    };

    return (
        <CommonForm
            onFinish={onFinishHandler}
            SignUp="true"
            to="/login"
            Children="already have account ? Login here"
            heading='Register'
            type='submit'
        />
    )
}

export default Register