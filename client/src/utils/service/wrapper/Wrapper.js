import React from 'react';
import Layout from '../../../layout/Layout';

const Wrapper = ({ children }) => {
    console.log(children);  // Check if children are correctly passed
    return (
        <Layout>
            <div style={{ marginTop: "20px" }}>
                {children}  {/* Render `children` prop */}
            </div>
        </Layout>
    );
};

export default Wrapper;
