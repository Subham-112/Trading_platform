import React from 'react';

export default function Award() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5'>
                    <h2 style={{fontSize: 35}} className='mt-4'>Largest stock broker in India</h2>
                    <p className='mb-5' style={{width: 520, fontSize: 16}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row' style={{marginLeft: -20}}>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures & Options</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stokes and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. sectors</p></li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' style={{width: '90%'}} />
                    </div>
                    
                </div>
            </div>
        </div>
     );
}