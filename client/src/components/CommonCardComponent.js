import React from 'react'
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { book } from './images/image';
import { Link } from 'react-router-dom';
 const CardComponent = ({ eachBooks, deleteBook, to, toBookDetails, details }) => {
    return (
        <div className='col-4 col-lg-4 col-md-4'>
            <Card
                style={{
                    width: 430,
                    // maxHeight: '50%', // Set a fixed height for the Card
                    overflow: 'auto', // Enable vertical scrolling if content exceeds height
                    marginTop: 16,
                }}
                actions={[
                    <React.Fragment key="edit">
                        {!details ? <Link to={to}><FontAwesomeIcon icon={faPencil} /></Link> : null}
                    </React.Fragment>,
                    <React.Fragment key="delete">
                        {!details ? <FontAwesomeIcon icon={faTrash} onClick={deleteBook} /> : null}
                    </React.Fragment>,
                    <React.Fragment key="view">
                        {!details ? <Link to={toBookDetails}> <FontAwesomeIcon icon={faEye} /></Link> : null}
                    </React.Fragment>
                ]}
            >
                <div > {/* Fixed-height wrapper */}
                    <Meta
                        avatar={<Avatar src={book} />}
                        title={eachBooks.title}
                        description={
                            <div>
                                <p>{eachBooks.description}</p>
                                <p><strong>Price:</strong> ${eachBooks.price}</p>
                                <p><strong>Author:</strong> {eachBooks.author}</p>
                                <p><strong>Publish Year:</strong> {eachBooks.publishYear}</p>
                            </div>
                        }
                    />
                </div>
            </Card>
        </div>


    )
}

export default CardComponent