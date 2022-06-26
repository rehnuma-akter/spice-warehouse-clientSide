import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './ContactUs.css';

const ContactUs = () => {
        return (
            <div className='container contact-us'>
                <MapContainer center={[24.895660842184107, 91.86855397416386]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[24.895660842184107, 91.86855397416386]}>
                        <Popup>
                            You are here!!!
                        </Popup>
                    </Marker>
                </MapContainer>
                <div>
                    <h3>Connect with us</h3>
                    <Form className='form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <label htmlFor="text" className='mb-3'>Drop any query</label>
                        <textarea name="" id="" cols="40" rows="7" placeholder='write a message'></textarea>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
}

export default ContactUs;