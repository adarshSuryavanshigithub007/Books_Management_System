import React from 'react'
export const CommonButton = ({ icon, size,children,type }) => {
    return (
        <button className='btn btn-primary' type={type}>
        {children}
    </button>
    
        
    )
}

