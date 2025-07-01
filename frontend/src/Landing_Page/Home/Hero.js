import React from 'react';

export default function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
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