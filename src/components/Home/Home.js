import React from 'react';
import Header from '../Header/Header'
import homeBanner from '../../images/home-banner.jpg'
import VehicleContainer from '../VehicleContainer/VehicleContainer';

const Home = () => {
    const bannerStyle = {
        backgroundImage: `url(${homeBanner})`,
        height: '881px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    return (
        <div style={bannerStyle}>
            <Header></Header>
            <VehicleContainer></VehicleContainer>
        </div>
    );
};

export default Home;