import React from 'react';
import Layout from '../../../layout/Layout';

const Wrapper = ({ children }) => {
    console.log(children);
    return (
        <Layout>
            <div style={{ margin: "0px 40px" }}>
                {children}
            </div>
        </Layout>
    );
};

export default Wrapper;
