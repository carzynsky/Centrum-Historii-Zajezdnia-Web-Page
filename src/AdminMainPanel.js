import React, { Component } from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Line, Bar} from 'react-chartjs-2';
import './Measurement.css';

class AdminMainPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
          mesm: [],
          mesm2: [],
          currentTemperature: '',
          currentHumidity: '',
          chartData1: [],
          chartData2: [],
          chartHumidityData: [],
          optionsHumidityChart: {
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
                  max: 100,
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
          },
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
  setCurrentHumidity(){
    this.setState({
      currentHumidity: 35
    })
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
          borderColor: 'rgba(248, 54, 0, 0.8)',
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(254, 140, 0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(75,192,192,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
        },
      ],
    },
    chartHumidityData: {
      labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesien',
        'Pażdziernik', 'Listopad', 'Grudzień'],
        datasets: [
          {
            label: 'Średnia wilgotności powietrza w danym miesiącu dla wszystkich czujników',
            // data: this.state.mesm2.map((mes) => {
            //   return mes.toFixed(2);
            // }),
            data: [35,36,32,32.5,40,42,40,35,38,40,41,43],
            responsive: true,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            backgroundColor: 'rgba(152, 52, 239)',
            borderColor: 'rgba(152, 52, 239, 0.5)',
            hoverBackgroundColor: 'rgba(30, 100, 150, 0.8)'
          },
        ],
    }
  })

  }
  
  async componentDidMount(){
    this.setChartData();
    this.setCurrentTemperature();
    this.setCurrentHumidity();
    // setInterval(async () => {
    //   try{
    //     const response1 = await fetch('https://localhost:44340/api/measurement');
    //     const response2 = await fetch('https://localhost:44340/api/measurement/averageByMonth')
    //     const data1 = await response1.json();
    //     const data2 = await response2.json();
    //     this.setState({mesm: data1});
    //     this.setState({mesm2: data2});
    //     this.setChartData();
    //     this.setCurrentTemperature();
    //   }
    //   catch(error){
    //     console.log(error);
    //   }
    // }, 500);
    
  }


  render() {
    return (
      <Container className="myContainer">
        <Row>
            <Col>
                <h1>Panel admina</h1>
            </Col>
        </Row>
        <Row>
          <Col>
              <Link to='/Centrum-Historii-Zajezdnia-Web-Page/login'>
                  <Button  className="Login-Button2" variant='primary'>Wyloguj</Button>
              </Link>
          </Col>
        </Row>
        <Row className='firstRow'>
          <Col xs='3'>
            <div className='currentTemperature'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Aktualna temperatura:</Form.Label>
                  <Form.Text className="labelBody">{this.state.currentTemperature}°C</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col >
          <Col xs='3'>
            <div className='currentHumidity'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Aktualna wilgotność:</Form.Label>
                  <Form.Text className="labelBody">{this.state.currentHumidity}%</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col >
          <Col xs='2'>
          </Col>
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
              width={90}
              height={50}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
            <div className='measurementPanel'>
              <Bar 
              data={this.state.chartHumidityData}
              options={this.state.optionsHumidityChart}
              width={90}
              height={50}
              />
            </div>
          </Col>
        </Row>
        <Row>
        <Col xs='4'>
            <div className='quantityAll'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Wszystkie pomiary:</Form.Label>
                  <Form.Text className="labelBody">114</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs='4'>
            <div className='quantityAll'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Pomiary w tym miesiącu:</Form.Label>
                  <Form.Text className="labelBody">25</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs='4'>
            <div className='quantityAll'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Pomiary dzisiaj:</Form.Label>
                  <Form.Text className="labelBody">4</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default AdminMainPanel;