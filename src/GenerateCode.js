import React, { Component } from "react";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Measurement.css';
import './Technician.css';
import NavTechnician from './NavTechnician.js';
import text from './CodeTemplate.js';

class GenerateCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      generatedCodeData: {
        ipAddress: '',
        mask: '',
        gate: '',
        dns: '',
        networkName: '',
        password: '',
        sensorName: '',
        top: '',
        left: '',
        externalIp: ''
      },
      fileName: 'main.py',
      template: 'xd'
    }
    this.IpAddress = this.IpAddress.bind(this);
    this.Mask = this.Mask.bind(this);
    this.Gate = this.Gate.bind(this);
    this.DNS = this.DNS.bind(this);
    this.NetworkName = this.NetworkName.bind(this);
    this.Top = this.Top.bind(this);
    this.Left = this.Left.bind(this);
    this.ExternalIp = this.ExternalIp.bind(this);
    this.SensorName = this.SensorName.bind(this);
    this.Create = this.Create.bind(this);
    this.createSensor = this.createSensor.bind(this);
    this.clearData = this.clearData.bind(this);
    this.Password = this.Password.bind(this);
  }

  async createSensor(){
    console.log(this.state.createSensorData);
    try{
      fetch('https://localhost:5001/api/sensors', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          sensorName: this.state.generatedCodeData.sensorName,
          ipAddress: this.state.generatedCodeData.ipAddress,
          externalIp: this.state.generatedCodeData.externalIp,
          top: this.state.generatedCodeData.top,
          left: this.state.generatedCodeData.left,
          addedBy: localStorage.getItem('loggedUser')
        })
      })
      .then(response => {
        console.log(response);
      })
    }
    catch(error){
      console.log(error);
    }
  }

  Create(){
    var timeNow = new Date();

    let text1 = text;
    text1 = text1.replace('FORMAT_DATY', `${timeNow.getFullYear()},${timeNow.getMonth()+1},${timeNow.getDate()},${timeNow.getHours()},${timeNow.getMinutes()},0,0,0`);
    text1 = text1.replace('IP', this.state.generatedCodeData.ipAddress);
    text1 = text1.replace('MASKA', this.state.generatedCodeData.mask);
    text1 = text1.replace('GATEWAY', this.state.generatedCodeData.gate);
    text1 = text1.replace('DNS', this.state.generatedCodeData.dns);
    text1 = text1.replace('NAZWA SIECI', this.state.generatedCodeData.networkName);
    text1 = text1.replace('HASŁO', this.state.generatedCodeData.password);
    text1 = text1.replace('NAZWA SIECI', this.state.generatedCodeData.networkName);
    text1 = text1.replace('HASŁO', this.state.generatedCodeData.password);
    text1 = text1.replace('NAZWA', this.state.generatedCodeData.sensorName);

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text1));
    element.setAttribute('download', this.state.fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    this.createSensor();
  }

  clearData(){
    this.state.generatedCodeData.ipAddress = '';
    this.state.generatedCodeData.mask = '';
    this.state.generatedCodeData.gate = '';
    this.state.generatedCodeData.dns = '';
    this.state.generatedCodeData.networkName = '';
    this.state.generatedCodeData.top = '';
    this.state.generatedCodeData.left = '';
    this.state.generatedCodeData.externalIp = '';
    this.state.generatedCodeData.sensorName = '';
    this.state.generatedCodeData.password = '';
  }

  IpAddress(event){
    this.state.generatedCodeData.ipAddress = event.target.value;
  }

  Mask(event){
    this.state.generatedCodeData.mask = event.target.value;
  }

  Gate(event){
    this.state.generatedCodeData.gate = event.target.value;
  }

  DNS(event){
    this.state.generatedCodeData.dns = event.target.value;
  }

  NetworkName(event){
    this.state.generatedCodeData.networkName = event.target.value;
  }

  Top(event){
    this.state.generatedCodeData.top = event.target.value;
  }

  Left(event){
    this.state.generatedCodeData.left = event.target.value;
  }

  ExternalIp(event){
    this.state.generatedCodeData.externalIp = event.target.value;
  }

  SensorName(event){
    this.state.generatedCodeData.sensorName = event.target.value;
  }

  Password(event){
    this.state.generatedCodeData.password = event.target.value;
  }

  render() {
    return (
      <Container className="myContainer">
        <Row>
          <Col xs='12'>
            <div className="technicianTitle">
              Generowanie kodu i dodanie czujnika
            </div>
          </Col>        
        </Row>
        <Row className="technicianInput">
            <Col>
              <Form>
                <Form.Group style={{marginTop: '10px'}}>
                  <Form.Label>Adres Ip</Form.Label>
                  <Form.Control type="text" onChange={this.IpAddress}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Maska</Form.Label>
                  <Form.Control type="text" onChange={this.Mask}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Adres bramy</Form.Label>
                  <Form.Control type="text" onChange={this.Gate}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>DNS</Form.Label>
                  <Form.Control type="text" onChange={this.DNS}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nazwa sieci</Form.Label>
                  <Form.Control type="text" onChange={this.NetworkName}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control type="text" onChange={this.Password}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nazwa czujnika</Form.Label>
                  <Form.Control type="text" onChange={this.SensorName}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Top</Form.Label>
                  <Form.Control type="text" onChange={this.Top}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Left</Form.Label>
                  <Form.Control type="text" onChange={this.Left}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Adres ip zewnętrzny</Form.Label>
                  <Form.Control type="text" onChange={this.ExternalIp}/>
                </Form.Group>
                <Button className="btnEdit" variant="dark" style={{marginLeft: '120px', marginTop: '10px',marginBottom: '30px', width: '120px', height: '35px'}} onClick={this.Create}>Generuj</Button>
              </Form>
            </Col>
        </Row>
      </Container>
    );
  }
}
 
export default GenerateCode;