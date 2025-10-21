import React from 'react';

function Awards() {
    return ( <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 mt-5">
                <img src="./media/images/largestBroker.svg" alt="largest broker image" />
            </div>
            <div className="col-6 mt-5">
                <h1>Largest Stock Brocker in India </h1>
                <p className='mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volums in india daily by trading and investing in</p>
                <ul className='container'>
                    <div className="row">
                        <div className="col-6">
                        <li className='p-2' >Futures and Options </li>
                    <li className='p-2'>Commodity derivatives</li>
                    <li className='p-2'>Equity investments</li>
                   
                    </div>
                    <div className="col-6">

                    <li className='p-2'>Currency Derivatives</li>
                    <li className='p-2'>Stocks & IPos</li>
                    <li className='p-2'>Directd Mutual funds </li>
                    </div>
                    <img className='pr-4 mt-3' src=".\media\images\pressLogos.png" alt="" />
                     </div>


                </ul>
            </div>
        </div>
    </div>
    </>);
}

export default Awards;