import React from 'react';
function Hero() {
    return ( <>
        <div className="container p-5 ">
            <div className="row text-center ">
                <img src="./media/images/homeHero.png"  className='mb-5' alt="home Hero image" />
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='m-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"20%",margin:"0 auto", fontWeight:"500"}} className="btn btn-primary p-2 mt-4">Signup For Free</button>
            </div>
        </div>
    </>);
}
export default Hero;