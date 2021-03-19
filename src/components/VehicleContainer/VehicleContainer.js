import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import fakeData from '../../fakeData/fakeData.json'
import Destination from '../DestinationContainer/DestinationContainer';

const VehicleContainer = () => {
    const [vehicles, setVehicles] = useState([]);
    const [vehicleInfo, setVehicleInfo] = useState([]);
    const handleDestination = vehicle => {
        setVehicleInfo('clicked',vehicle)
    }
    useEffect(() => {
        setVehicles(fakeData);
    }, [])

    return (
        <>
        <div style={{height: '90%'}}className="container d-flex align-items-center">
            {
                vehicles.map(vehicle => <VehicleCard key={vehicle.id} handleDestination={handleDestination} vehicle={vehicle}></VehicleCard>)
            }
        </div>

        </>
    );
};

export default VehicleContainer;