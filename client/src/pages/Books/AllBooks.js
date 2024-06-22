import React, { useEffect, useState } from 'react'
import Wrapper from '../../utils/service/wrapper/Wrapper'
import { getAllBooks } from '../../utils/service/Apis';
import { Button, message, Row } from 'antd';
import { CardComponent } from '../../components/CommonCardComponent';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([])
    const token = localStorage.getItem('token');
    console.log(allBooks)
    const handleChangeAllBooks = async () => {
        try {
            const allBooks = await getAllBooks(token)
            console.log(allBooks)
            if (allBooks.success) {
                message.success(allBooks.message)
                setAllBooks(allBooks.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleChangeAllBooks()
    }, [])
    return (
        <Wrapper>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '10px' }}>
                <Link to='/addnewbooks'><Button type="default" shape="round" icon={<PlusOutlined />} size='small'>
                    ADD New Books
                </Button></Link>
                
            </div>

            <Row justify='center' gutter={[16, 16]}>
                {allBooks && allBooks.map((eachBooks) => { return <CardComponent eachBooks={eachBooks} /> })}
            </Row>
        </Wrapper>
    )
}

export default AllBooks