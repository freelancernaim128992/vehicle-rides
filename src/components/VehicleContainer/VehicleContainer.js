import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import fakeData from '../../fakeData/fakeData.json'

const VehicleContainer = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(fakeData);
    }, [])

    return (
        <div style={{height: '90%'}}className="container d-flex align-items-center">
            {
                vehicles.map(vehicle => <VehicleCard vehicle={vehicle}></VehicleCard>)
            }
        </div>
    );
};

export default VehicleContainer;