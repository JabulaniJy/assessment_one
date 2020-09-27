import React from 'react'
import {Container, Row,Col } from 'react-bootstrap';
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps';
import * as markersData from './data/markers.json';


export default function AdministrationComponent() {

    function Map(){
        return(
        <GoogleMap defaultZoom={13} defaultCenter={{lat: -26.191642, lng:28.037221}}>
            {markersData.customers.map((customer)=>
            <Marker key={customer.customer_ID} position={{lat:customer.location[0],lng:customer.location[1] }}/>
            )}
        </GoogleMap>
        )
    }

const WrappedMap = withScriptjs(withGoogleMap(Map));
    return (
        <div>
           <Container fluid>
                <Row>
                    <Col>sales this month</Col>
                    <Col>Projected sales: 40000</Col>
                </Row>
                <Row>
                    <div className="m-4 map-div" >
                    <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCR7paArzV5aQrq1gMs8HXDqVJWVG4Cqt0'}
                    loadingElement={ <div style={{height:"100%"}}/>}
                    containerElement={ <div style={{height:"100%"}}/>}
                    mapElement={ <div style={{height:"100%"}}/>}
                    />
                    </div>
                </Row>
            </Container>
        </div>
    )
}
