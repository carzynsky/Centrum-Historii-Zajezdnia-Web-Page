import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './Measurement.css';
import './Server.css';

class Server extends Component {
  constructor(props){
    super(props);
    this.state = {
        lastMeasurement: []
    }
    this.getLastMeasurement = this.getLastMeasurement.bind(this);
  }

  async getLastMeasurement(){
    const data = await fetch('https://localhost:5001/api/measurement/last');
    const response = await data.json();
    this.setState({
        lastMeasurement: response
    })
  }

  componentDidMount(){
    this.getLastMeasurement();
  }

  render() {
    return (
      <Container className="myContainer">
        
        {this.state.lastMeasurement.map((lm) => {
          return(
            <Row>
              <Col sm={4} md={4}>
                <div className="sensorCard">
                  <Row>
                    <Col sm={6}>
                      <label style={{color: '#9b04ec'}}>{lm.sensorName}</label>                
                    </Col>
                    <Col sm={4}>
                      <label style={{fontSize: '16px'}}>ID: {lm.id}</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <label style={{fontSize: '14px'}}>Ostatni pomiar: {lm.minutesAgo} minut temu</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label style={{fontSize: '14px'}}>{lm.info}</label>
                    </Col>
                  </Row>               
                </div>
              </Col>
              <Col sm={8} md={8}>
                <div className="sensorMoreDetails">
                  <Row>
                    <Col>
                        <label style={{fontSize: '35px', paddingTop: '5px'}}>{lm.temperature}℃</label>
                    </Col>
                  </Row> 
                  <Row>
                    <Col>
                      <label style={{fontSize: '15px'}}>{lm.humidity}%</label>
                    </Col>
                  </Row> 
                  <Row>
                    <Col>
                      <label style={{fontSize: '13px'}}>Data pomiaru: {lm.dateTime}</label>
                    </Col>
                  </Row> 
                </div>
              </Col>
              </Row>
          )

        })}
      </Container>
    );
  }
}
export default Server;