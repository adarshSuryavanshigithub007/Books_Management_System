import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../utils/service/wrapper/Wrapper';
import { CommonForm } from '../../components/CommonForm';
import { getAllBooks, getEditBook } from '../../utils/service/Apis';
import { Avatar, Button, Col, Form, Input, message, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { SendOutlined } from '@ant-design/icons';
import { CommonButton } from '../../components/CommonButton';

const EditBook = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [book, setBook] = useState(null);
    const token = localStorage.getItem('token');
    const { id } = useParams(); // Extract id from useParams
    const [form] = Form.useForm(); // Create a form instance
    const navigate = useNavigate()
    const handleChangeAllBooks = async () => {
        try {
            const allBooks = await getAllBooks(token);
            if (allBooks.success) {
                setAllBooks(allBooks.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleChangeAllBooks();
    }, [id]);

    useEffect(() => {
        if (allBooks.length > 0) {
            const selectedBook = allBooks.find(book => book._id === id);
            if (selectedBook) {
                setBook(selectedBook);
                form.setFieldsValue(selectedBook)
            }
        }
    }, [allBooks, id, form])

    const handleSubmitForm = async (values) => {
        console.log('Form Submitted:', values);
        try {
            const response = await getEditBook(token, id, values);
            console.log(response)
            if (response.success) {
                message.success(response.message)
                navigate('/')
            }
        } catch (error) {
            console.error('Edit book request failed:', error);
        }
    };

    return (
        <Wrapper>
            {book && (
                <Row justify="center" align="middle" style={{ minHeight: '50%', marginTop: '30px' }}>
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
                                    backgroundColor: '#34495e',
                                    marginBottom: '0px',
                                    marginTop: '-40px'
                                }}
                                icon={<FontAwesomeIcon icon={faBook} />}
                            />
                            <Form
                                form={form}
                                style={{ width: '100%' }}
                                name="basic"
                                layout="vertical"
                                onFinish={handleSubmitForm}
                            >
                                <h3 style={{ textAlign: 'center' }}>Edit</h3>
                                <Form.Item
                                    label="Title"
                                    name="title"
                                    rules={[{ required: true, message: 'Please input your title!' }]}
                                >
                                    <Input type="text" required />
                                </Form.Item>
                                <Form.Item
                                    label="Author"
                                    name="author"
                                    rules={[{ required: true, message: 'Please input author!' }]}
                                >
                                    <Input type="text" required />
                                </Form.Item>
                                <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[{ required: true, message: 'Please input description!' }]}
                                >
                                    <Input.TextArea rows={3} />
                                </Form.Item>
                                <Form.Item
                                    label="Price"
                                    name="price"
                                    rules={[{ required: true, message: 'Please input price!' }]}
                                >
                                    <Input type="number" required />
                                </Form.Item>
                                <Form.Item
                                    label="Publish Year"
                                    name="publishYear"
                                    rules={[{ required: true, message: 'Please input publish year!' }]}
                                >
                                    <Input type="number" required />
                                </Form.Item>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ flex: 1, textAlign: 'center' }}>
                                        <CommonButton icon={<SendOutlined />} size='large' type='submit'>Submit</CommonButton>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            )}
        </Wrapper>
    );
};

export default EditBook;
