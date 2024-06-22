import React from 'react'
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { book } from './images/image';
export const CardComponent = ({ eachBooks }) => {
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
            <FontAwesomeIcon icon={faPencil} />,
            <FontAwesomeIcon icon={faTrash} />,
            <FontAwesomeIcon icon={faEye} />
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

