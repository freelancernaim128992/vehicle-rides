import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [userInfo,setUserInfo] = useContext(UserContext);
    const handleLogOut = () => {
        const newUser = {...userInfo}
        newUser.email = '';
        newUser.password = '';
        newUser.isSigned = false;
        setUserInfo(newUser)
    }
    return (
        <div className="container">
            <Navbar variant="light">
                <Navbar.Brand style={{fontWeight: 'bold'}} href="/">Vehicle Rides</Navbar.Brand>
                <Nav className="w-100 d-flex justify-content-end">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/destination/BIKE">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    {userInfo.isSigned ? <button onClick={handleLogOut} className="btn btn-primary">LogOut</button> :
                     <Nav.Link href="/login">
                        <button className="bg-primary text-white rounded">LogIn</button>
                    </Nav.Link>}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;