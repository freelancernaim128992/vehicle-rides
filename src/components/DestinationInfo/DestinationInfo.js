import React, { useState } from 'react';
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import GoogleMap from '../GoogleMap/GoogleMap';


const DestinationInfo = (props) => {
    const {name,img,sit,ridingPrice,img1,img2,img3} = props.vehicleInfo;
    const [displayVehicleList, setDisplayVehicleList] = useState({
        displayImg: false
    })
    const fromStyle = {
        backgroundColor: '#EFEFEF',
        width: '300px'
    }
    const handleSearch = (event) => {
        const newInfo = {...displayVehicleList}
        newInfo.displayImg = true;
        setDisplayVehicleList(newInfo)
        event.preventDefault();
    }
    return (
        <>
        <Header></Header>
        <div className="container pt-5" style={{borderTop: '1px solid #f1f1f1'}}>
            <div className="row">
                <div className="col-3 p-3"  style={fromStyle}>
                    <div className="p-3 rounded">
                        <form onSubmit={handleSearch}>
                            <p>Pick From</p>
                            <input className="w-100 rounded" type="text" required/>
                            <p>Pick To</p>
                            <input className="w-100 rounded" type="text" required/>
                            <input className="btn btn-primary mt-2 w-100" type="submit" value="Search" />
                        </form>
                     </div>
                    {displayVehicleList.displayImg && <div className="mt-3">
                        <div className="bg-light my-3">
                            <img className="w-25" src={img1} alt=""/>
                            <span>{name}</span>
                            <span className="ml-3"><FontAwesomeIcon icon={faUserFriends} /> {sit}</span>
                            <span className="ml-5">${ridingPrice}</span>
                        </div>
                        <div className="bg-light my-3">
                            <img className="w-25" src={img2} alt=""/>
                            <span>{name}</span>
                            <span className="ml-3"><FontAwesomeIcon icon={faUserFriends} /> {sit}</span>
                            <span className="ml-5">${ridingPrice}</span>
                        </div>
                        <div className="bg-light my-3">
                            <img className="w-25" src={img3} alt=""/>
                            <span>{name}</span>
                            <span className="ml-3"><FontAwesomeIcon icon={faUserFriends} /> {sit}</span>
                            <span className="ml-5">${ridingPrice}</span>
                        </div>   
                    </div>}
                    
                </div>
                
                <div className="col-9">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
        </>
    );
};

export default DestinationInfo;