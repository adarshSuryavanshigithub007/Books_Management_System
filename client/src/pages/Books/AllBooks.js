import React, { useEffect, useState } from 'react'
import Wrapper from '../../utils/service/wrapper/Wrapper'
import { getAllBooks, getDeleteBook } from '../../utils/service/Apis';
import { Button, Row } from 'antd';
import { CardComponent } from '../../components/CommonCardComponent';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([])
    const token = localStorage.getItem('token');
    console.log(allBooks)
    const handleChangeAllBooks = async () => {
        try {
            const response = await getAllBooks(token)
            console.log(response)
            if (response.success) {
                setAllBooks(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleChangeAllBooks()
    }, [])
    const handleClickDeleteBook = async ( id) => {
        console.log("delete book", id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {   
                try {
                    console.log("Confirmed deletion");
                    await getDeleteBook(token, id);
                    swal("Poof! Your Book has been deleted!", {
                        icon: "success",
                    });
                    handleChangeAllBooks();
                } catch (error) {
                    console.log("Error deleting book:", error);
                    swal("Oops!", "Failed to delete the book.", "error");
                }
            } else {
                console.log("Cancelled deletion");
                swal("Your Book is safe!");
            }
        });
    };
    useEffect(() => {
        handleChangeAllBooks()
    }, [])
    return (
        <Wrapper>
            {allBooks.length !== 0 ? (<>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <Link to='/addnewbooks'><Button type="default" shape="round" icon={<PlusOutlined />} size='small'>
                        ADD New Books
                    </Button></Link>
                </div>
                <Row justify='center' gutter={[16, 16]}>
                    {allBooks && allBooks.map((eachBooks) => {
                        console.log(eachBooks)
                        return <CardComponent
                        key={eachBooks._id}
                            eachBooks={eachBooks}
                            deleteBook={() => handleClickDeleteBook(eachBooks._id)}
                            to={`edituser/${eachBooks._id}`}
                            toBookDetails={`bookdetails/${eachBooks._id}`}
                        />
                    })}
                </Row></>) : <>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '10px', }}>
                    <Link to='/addnewbooks'><Button type="default" shape="round" icon={<PlusOutlined />} size='small'>
                        ADD New Books
                    </Button></Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', height: '50vh' }}>
                    <div style={{
                        color: '#721c24',
                        borderRadius: '5px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        NO DATA FOUND
                    </div>
                </div>
            </>}
        </Wrapper>
    )
}

export default AllBooks