import React, { Component } from "react";
import{Container, Row, Col, Form} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import './Measurement.css';

class Measurement extends Component {
    constructor(props){
        super(props);
        this.state = {
          mesm: [],
          mesm2: [],
          currentTemperature: '',
          chartData1: [],
          chartData2: [],
          options: {
            animation: {
              easing: "easeOutCubic",
              duration: 1000
            },
            legend: {
              labels: {
                fontColor: 'rgb(255,255,255,0.6)',
                fontSize: 15
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  color: 'rgb(0,0,0,0.1)'
                },
                ticks: {
                  fontColor: 'rgb(255,255,255,0.6)',
                  beginAtZero: true,
                  max: 40,
                  min: 0
                }
              }],
              xAxes: [{
                gridLines: {
                  color: 'rgb(0,0,0,0.1)'
                },
                ticks: {
                  fontColor: 'rgb(255,255,255,0.78)'
                }
              }]
            }
          }
        }
      }

  setCurrentTemperature(){
    // this.setState({
    //   currentTemperature: this.state.mesm[this.state.mesm.length-1].temperature
    // });
    this.setState({
      currentTemperature: 21.4
    });
  }
  setChartData(){
    // this.setState({chartData1: {
    //   labels: this.state.mesm.map((time) => {
    //     return time.dateTime;
    //   }),
    //   datasets: [
    //     {
    //       label: 'Temperatura',
    //       data: this.state.mesm.map((mes) => {
    //         return mes.temperature;
    //       }),
    //       responsive: true,
    //       lineTension: 0.1,
    //       borderCapStyle: 'butt',
    //       backgroundColor: 'rgba(0,0,20,0.2)',
    //       borderColor: 'rgba(0,0,0,1)',
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgba(255,255,255,1)',
    //       pointBackgroundColor: '#ffffff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //       pointHoverBorderColor: 'rgba(220,220,220,1)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //     }
    //   ],
    // }});

    this.setState({chartData2: {
      labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesien',
      'Pażdziernik', 'Listopad', 'Grudzień'],
      datasets: [
        {
          label: 'Średnia temperatura w danym miesiącu dla wszystkich czujników',
          // data: this.state.mesm2.map((mes) => {
          //   return mes.toFixed(2);
          // }),
          data: [20,21,22,22.3,20,21,22,22.3,20,21,22,22.3],
          responsive: true,
          lineTension: 0.1,
          borderCapStyle: 'butt',
          backgroundColor: 'transparent',
          borderColor: 'rgba(218, 34, 255)',
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(151, 51, 238)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    }})

  }
  
  async componentDidMount(){
    this.setChartData();
    this.setCurrentTemperature();
    setInterval(async () => {
      try{
        const response1 = await fetch('https://localhost:44340/api/measurement');
        const response2 = await fetch('https://localhost:44340/api/measurement/averageByMonth')
        const data1 = await response1.json();
        const data2 = await response2.json();
        this.setState({mesm: data1});
        this.setState({mesm2: data2});
        this.setChartData();
        this.setCurrentTemperature();
      }
      catch(error){
        console.log(error);
      }
    }, 500);
    
  }


  render() {
    return (
      <Container className="myContainer">
        <Row className='firstRow'>
          <Col xs='4'>
            <div className='quantityAll'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Liczba wszystkich pomiarów:</Form.Label>
                  <Form.Text className="labelBody">114</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs='4'>
            <div className='currentTemperature'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Aktualna temperatura:</Form.Label>
                  <Form.Text className="labelBody">{this.state.currentTemperature}°C</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col >
          <Col xs='4'>
            <div className='sourceSensor'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Czujnik:</Form.Label>
                    <Form.Control as="select" selected="All" className='selectSensor'>
                      <option>All</option>
                      <option>Main Hall</option>
                      <option>Small Room</option>
                    </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
            <div className='measurementPanel'>
              <Line 
              data={this.state.chartData2}
              options={this.state.options}
              width={100}
              height={50}
              />
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col xs='3'>
            <div className='temperatureOnlyPanel'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Ostatnia zmierzona temperatura:</Form.Label>
                  <Form.Label className='labelBody'>{this.state.currentTemperature}°C</Form.Label>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row> */}

      </Container>
    );
  }
}
 
export default Measurement;