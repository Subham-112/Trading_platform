import React from 'react';

export default function Stats() {
    return ( 
        <div className='container' style={{marginBottom: 200, marginTop: 200, paddingLeft: 100}}> 
            <div className='row'>
                <div className='col-6'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted' style={{width: '70%'}}>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>

                    <h3 className='fs-4'>No Spam or gimmicks</h3>
                    <p className='text-muted' style={{width: '70%'}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted' style={{width: '70%'}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted' style={{width: '70%'}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width: '75%'}}/>
                    <div className='row'>
                        <div className='col-6'>
                            <a style={{textDecoration: 'none'}} href=''>Explore our product <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        <div className='col-6'>
                            <a style={{textDecoration: 'none'}} href=''>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}