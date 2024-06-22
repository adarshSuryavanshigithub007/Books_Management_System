import React from 'react'
import { CardComponent } from '../components/CardComponent'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../layout/Layout'


const Home = () => {

    

    return (
        <Layout>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <CardComponent
                title="Ram"
                price="300"
                description='"The Ramayana" is a timeless epic that holds a cherished place in Indian literature and culture. Composed by the sage Valmiki, it narrates the legendary tale of Prince Rama, his wife Sita, and their journey through trials and triumphs. At its heart, "The Ramayana" is a tale of righteousness, love, and devotion.'
                imageUrl="https://api.dicebear.com/7.x/miniavs/svg?seed=2" // Sample avatar image URL
            />
            <div className='icon-container' style={{ marginRight: '3rem' }} title="Add New Books">
                <FontAwesomeIcon icon={faPlus} />
            </div>

        </div>
        </Layout>

    )
}

export default Home