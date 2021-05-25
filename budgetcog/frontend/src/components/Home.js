import React from 'react'
import phone from '../../static/frontend/images/phone.png'

const Home = () => {
    return (
        <div className="home-background">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                        <img src={require('../../static/frontend/images/phone.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
