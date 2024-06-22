import { Avatar, Button, Col, Form, Input, Row } from 'antd'
import React, { Children } from 'react'
import { Link } from 'react-router-dom'

import { SendOutlined, UserOutlined } from '@ant-design/icons'
import { CommonButton } from './CommonButton'

export const CommonForm = ({ onFinish, to, heading, SignUp, Children, type }) => {
    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col xs={22} sm={20} md={16} lg={12} xl={8}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    background: '#fff',
                    borderRadius: '0px'
                }}>
                    <Avatar
                        size={45}
                        style={{
                            backgroundColor: '#87d068',
                            marginBottom: '0px',
                            marginTop: '-40px'
                        }}
                        icon={<UserOutlined />}
                    />
                    <Form name="basic" layout='vertical' onFinish={onFinish} style={{ width: '100%' }}>
                        <h1 style={{ textAlign: 'center' }}>{heading}</h1>
                        {SignUp && (

                            <Form.Item label="username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                <Input type='text' required />
                            </Form.Item>
                        )}
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                            <Input type='email' required />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input type="password" required />
                        </Form.Item>
                        {SignUp && (
                            <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: 'Please confirm your password!' }]}>
                                <Input type="password" required />
                            </Form.Item>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ flex: 1, textAlign: 'center' }}>
                                <CommonButton icon={<SendOutlined />} size='large' type={type} >Submit</CommonButton>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <Link to={to}>{Children}</Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

