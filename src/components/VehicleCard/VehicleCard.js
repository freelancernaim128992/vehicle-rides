import React from 'react';
import { Card } from 'react-bootstrap';

const VehicleCard = (props) => {
    const {name, img} = props.vehicle;
    const cardStyle = {
        width: '18rem',
        height: '18rem',
        borderRadius: '7px'
    }
    return (
        <Card className="col-md-3 p-3 text-center mr-3" style={cardStyle}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default VehicleCard;