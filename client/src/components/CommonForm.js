import { Avatar, Button, Col, Form, Input, Row } from 'antd'
import React, { Children } from 'react'
import { Link } from 'react-router-dom'

import { SendOutlined, UserOutlined } from '@ant-design/icons'
import { CommonButton } from './CommonButton'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CommonForm = ({ onFinish, to, heading, SignUp, SignIn, Children, type, minHeight, marginTop,form }) => {
    console.log(SignUp, SignIn)
    return (
        <>
            {!SignUp || !SignIn ? (
                <Row justify="center" align="middle" style={{ minHeight: minHeight, marginTop: marginTop }}>
                    <Col xs={22} sm={20} md={16} lg={12} xl={8}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            background: '#fff',
                            borderRadius: '8px',
                            width: '100%'
                        }}>
                            {!SignUp || !SignIn ? (
                                <Avatar
                                    size={45}
                                    style={{
                                        backgroundColor: '#87d068',
                                        marginBottom: '0px',
                                        marginTop: '-40px'
                                    }}
                                    icon={<UserOutlined />}
                                />
                            ) : null}
                            <Form name="basic" layout='vertical' onFinish={onFinish} form={form} style={{ width: '100%' }}>
                                <h1 style={{ textAlign: 'center' }}>{heading}</h1>
                                {SignUp && (
                                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
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
                                        <CommonButton icon={<SendOutlined />} size='large' type={type}>Submit</CommonButton>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Link to={to}>{Children}</Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            ) : (
                <Row justify="center" align="middle" style={{ minHeight: minHeight, marginTop: marginTop }}>
                    <Col xs={22} sm={20} md={16} lg={12} xl={8}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '20px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            background: '#fff',
                            borderRadius: '8px',
                            width: '100%'
                        }}>
                            <Avatar
                                size={45}
                                style={{
                                    backgroundColor: '#34495e ',
                                    marginBottom: '0px',
                                    marginTop: '-40px'
                                }}
                                icon={<FontAwesomeIcon icon={faBook} />}
                            />
                            <Form name="basic" layout='vertical' onFinish={onFinish} style={{ width: '100%' }}>
                                <h3 style={{ textAlign: 'center' }}>{heading}</h3>
                                <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input your title!' }]}>
                                    <Input type='text' required />
                                </Form.Item>
                                <Form.Item label="Author" name="author" rules={[{ required: true, message: 'Please input author!' }]}>
                                    <Input type='text' required />
                                </Form.Item>
                                <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input description!' }]}>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </Form.Item>
                                <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input price!' }]}>
                                    <Input type="number" required />
                                </Form.Item>
                                <Form.Item label="PublishYear" name="publishYear" rules={[{ required: true, message: 'Please input publish year!' }]}>
                                    <Input type="number" required />
                                </Form.Item>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ flex: 1, textAlign: 'center' }}>
                                        <CommonButton icon={<SendOutlined />} size='large' type={type}>Submit</CommonButton>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <Link to={to}>{Children}</Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            )}
        </>


    )
}

