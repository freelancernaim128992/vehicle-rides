import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from "../../fakeData/fakeData.json"
import DestinationInfo from '../DestinationInfo/DestinationInfo';

const DestinationContainer = () => {
    const {vehicleName} = useParams();
    const [vehicleData, setVehicleData] = useState([]);
    useEffect(() => {
        const vehicleInfo = fakeData.filter(data => data.name === vehicleName)
        setVehicleData(vehicleInfo);
    }, [vehicleName])
    return (

        vehicleData.map(vehicleInfo => <DestinationInfo key={vehicleInfo.id} vehicleInfo={vehicleInfo}></DestinationInfo>)
    );
};

export default DestinationContainer;