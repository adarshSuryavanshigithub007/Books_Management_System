import React, { useEffect, useState } from 'react'
import Wrapper from '../../utils/service/wrapper/Wrapper'
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../../utils/service/Apis';
import { CardComponent } from '../../components/CommonCardComponent';
import { message, Row } from 'antd';

const BookDetails = () => {
    const [allBooks, setAllBooks] = useState({})
    const { id } = useParams();
    const token = localStorage.getItem('token');
    console.log(allBooks)

    const handleGetBookDetails = async () => {
        try {
            const response = await getBookDetails(token, id,)
            console.log(response)
            if (response.success) {
                setAllBooks(response.data)
                message.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetBookDetails()
    }, [])

    return (
        <Wrapper>
            <CardComponent eachBooks={allBooks} details={true}/>

        </Wrapper>
    )
}

export default BookDetails