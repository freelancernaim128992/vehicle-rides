import React from 'react';
import Header from "../Header/Header"

const DestinationInfo = (props) => {
    const {name,img,sit,ridingPrice,img1,img2,img3} = props.vehicleInfo;
    const fromStyle = {
        backgroundColor: '#EFEFEF',
        width: '300px'
    }
    return (
        <>
        <Header></Header>
        <div className="container pt-5" style={{borderTop: '1px solid #f1f1f1'}}>
            <div className="row">
                <div className="col-3 p-3 rounded" style={fromStyle}>
                    <p>Pick From</p>
                    <input className="w-100 rounded" type="text"/>
                    <p>Pick To</p>
                    <input className="w-100 rounded" type="text"/>
                    <button className="btn btn-primary mt-2 w-100">Search</button>
                    <div>

                    </div>
                </div>
                <div className="col-9">

                </div>
            </div>
        </div>
        </>
    );
};

export default DestinationInfo;