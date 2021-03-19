import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VehicleCard = (props) => {
    const {name, img} = props.vehicle;
    const cardStyle = {
        width: '17rem',
        height: '18rem',
        borderRadius: '7px'
    }
    return (
        <Card className="col-md-3 p-3 text-center mr-3" style={cardStyle}>
            <Link to={`/destination/${name}`}>
                <Card.Img className="w-75" variant="top" src={img} />
            </Link>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default VehicleCard;