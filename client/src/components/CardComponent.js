import React from 'react'
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { book } from '../components/images/image';
export const CardComponent = ({ title, description, price, author, publishYear }) => {
    return (
        <div className='container'>
            <div class="row justify-content-center align-items-center g-1">
                <div className='col-4 col-lg-4 col-md-4'>
                    <Card
                        style={{
                            width: 500,
                            marginTop: 16,
                        }}
                        actions={[
                            <FontAwesomeIcon icon={faPencil} />,
                            <FontAwesomeIcon icon={faTrash} />,
                            <FontAwesomeIcon icon={faEye} />
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={book} />}
                            title={title}
                            description={
                                <div>
                                    <p>{description}</p>
                                    <p><strong>Price:</strong> ${price}</p>
                                    <p><strong>Author:</strong> {author}</p>
                                    <p><strong>Publish Year:</strong> {publishYear}</p>
                                </div>
                            }
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}

