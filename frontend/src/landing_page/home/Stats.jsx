import React from 'react';

function Stats() {
    return ( 
    <>
<div className="container mt-5 p-5">
    <div className="row p-5">
        <div className="col-6">
            <h2 className='fs-3'>Trust with confidence</h2>
            <h3 className='mt-5 fs-5'>Customer-first always</h3>
            <p className='text-muted'>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br /> lakh crores of equity investments, making us India’s <br /> largest broker; contributing to 15% of daily retail <br />exchange volumes in India.
            </p>

            <h3 className='mt-2 fs-5'>No spam or gimmicks</h3>
            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br />notifications. High quality apps that you use at your <br /> pace, the way you like. Our philosophies.</p>

            <h3 className='mt-2 fs-5'>The Zerodha universe</h3>
            <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments <br /> in 30+ fintech startups offer you tailored services specific to your needs.</p>

            <h3 className='mt-2 fs-5'>Do better with money</h3>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br /> facilitate transactions, but actively help you do better with your money.</p>
        </div>

        <div className="col-6">
            <div className="row">
            <img style={{ width:"95%"}} src="/media/images/ecosystem.png" alt="Ecosystem image" />
            <div className="col-6 "><a href="#" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
            <div className="col-6">
                <a href="#" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
            </div>
        </div>
        <div className="row">
            <img className='mt-5' style={{width:'50%', margin:'0 auto'}} src=".\media\images\pressLogos.png" alt="" />
        </div>
    </div>
</div>
</> );
}

export default Stats;