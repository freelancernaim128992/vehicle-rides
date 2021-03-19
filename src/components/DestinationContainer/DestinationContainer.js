import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from "../../fakeData/fakeData.json"
import DestinationInfo from '../DestinationInfo/DestinationInfo';

const DestinationContainer = () => {
    const {vehicleName} = useParams();
    const [vehicleInfo, setVehicleInfo] = useState({});
    useEffect(() => {
        const vehicleData = fakeData.filter(data => data.name === vehicleName)
        setVehicleInfo(vehicleData);
    }, [])
    return (
        <div>
            <DestinationInfo vehicleInfo={vehicleInfo}></DestinationInfo>
        </div>
    );
};

export default DestinationContainer;