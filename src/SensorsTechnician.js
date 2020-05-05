import React, { Component } from "react";
import {Container, Row, Table, Button, Modal, Form} from 'react-bootstrap';
import './Measurement.css';
import './Sensors.css'

class SensorsTechnician extends Component {
    constructor(props){
        super(props);
        this.state = {
            sensors: []
        }
        this.getSensors = this.getSensors.bind(this);
    }

    async getSensors(){
        const data = await fetch('https://localhost:5001/api/sensors');
        const response = await data.json();
        this.setState({
            sensors: response
        })
    }

    componentDidMount(){
        this.getSensors();
    }

  render() {
      const {sensors} = this.state;
    return (
      <Container className="myContainer">
          <Row>
              <h3>Lista czujników</h3>
          </Row>
        <Row>
        <Table striped bordered hover variant='dark' style={{marginTop: '20px'}}>
            <thead>
              <th>Id</th>
              <th>Nazwa</th>
              <th>Adres IP</th>
              <th>Adres zewnętrzny</th>
            </thead>
            <tbody>
              {sensors.map((s) => {
                return(
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.sensorName}</td>
                  <td>{s.ipAddress}</td>
                  <td>{s.externalIp}</td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </Row>   
      </Container>
    );
  }
}
 
export default SensorsTechnician;