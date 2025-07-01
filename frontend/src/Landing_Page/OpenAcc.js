import React from 'react';

export default function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                <button className='fs-5 btn btn-primary mb-5' style={{
                    width: '20%',
                    height: 50,
                    margin: '0 auto', 
                    borderRadius: 5,
                    border: 'none',
                    fontWeight: 600,
                    color: 'white'}}>
                    Sign Up for free
                </button>
            </div>
        </div>
     );
}