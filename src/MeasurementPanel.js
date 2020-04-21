import React, { Component } from "react";
import {Container, Row, Col, Form} from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import './Measurement.css';

class MeasurementPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
          currentSensorName: 'Główna hala',
          currentSensor: '1',
          currentTemperature: '',
          currentHumidity: '',
          numberOfAllMeasurement: '',
          numberOfMeasurmentToday: '',
          numberOfMeasurementThisMonth: '',
          sensors: [],
          chartTemperatureData: {data: {datasets: [], labels: []}},
          chartHumidityData: {data: {datasets: [], labels: []}},
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
          optionsTemperatureChart: {
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
        this.currentSensor = this.currentSensor.bind(this);
      }

  currentSensor(event){
    this.state.currentSensor = event.target.value;
    this.state.currentSensorName = this.state.sensors[event.target.value-1].display;
    // this.setState({
    //   currentSensor: event.target.value,
    //   currentSensorName: this.state.sensors[event.target.value-1].display
    // });
    this.fetchingLoopFunction();
  }

  setCurrentHumidity(){
    this.setState({
      currentHumidity: 35
    })
  }

  setChartData(dataTemperature, dataHumidity){
    this.setState({chartTemperatureData: {
      labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesien',
      'Pażdziernik', 'Listopad', 'Grudzień'],
      datasets: [
        {
          label: 'Średnia temperatura w danym miesiącu dla czujnika: ' + this.state.currentSensorName,
          data: dataTemperature.map((mes) => {
            return mes.toFixed(2);
          }),
          // data: [20,21,22,22.3,20,21,22,22.3,20,21,22,22.3],
          responsive: true,
          lineTension: 0.,
          borderCapStyle: 'butt',
          backgroundColor: 'transparent',
          borderColor: 'rgba(248, 54, 0, 0.8)',
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(254, 140, 0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 9,
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
            label: 'Średnia wilgotność powietrza w danym miesiącu dla czujnika: ' + this.state.currentSensorName,
            data: dataHumidity.map((mes) => {
              return mes.toFixed(2);
            }),
            // data: [35,36,32,32.5,40,42,40,35,38,40,41,43],
            responsive: true,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            backgroundColor: 'rgba(45, 118, 245)',
            hoverBackgroundColor: 'rgb(255, 71, 117)'
          },
        ],
    }
  })

  }
  async fetchingLoopFunction(){
      try{
        const responseTemperature = await fetch('https://localhost:44340/api/measurement/'+ this.state.currentSensor + '/averageTemperatureByMonth');
        const responseHumidity = await fetch('https://localhost:44340/api/measurement/'+ this.state.currentSensor + '/averageHumidityByMonth');
        const responseCurrent = await fetch('https://localhost:44340/api/measurement/' + this.state.currentSensor);
        const responseSensors = await fetch('https://localhost:44340/api/sensors');
        const responseNumberOfAllMeasurement = await fetch('https://localhost:44340/api/measurement/' + this.state.currentSensor + '/numberOfAllMeasurement');
        const responseNumberOfMeasurementThisMonth = await fetch('https://localhost:44340/api/measurement/' + this.state.currentSensor + '/numberOfMeasurementThisMonth');
        const responseNumberOfMeasurementToday = await fetch('https://localhost:44340/api/measurement/' + this.state.currentSensor + '/numberOfMeasurementToday');

        const dataTemperature = await responseTemperature.json();
        const dataHumidity = await responseHumidity.json();
        const dataCurrent = await responseCurrent.json();
        const dataSensors = await responseSensors.json();
        const dataNumberOfAllMeasurement = await responseNumberOfAllMeasurement.json();
        const dataNumberOfMeasurementThisMonth = await responseNumberOfMeasurementThisMonth.json();
        const dataNumberOfMeasurementToday = await responseNumberOfMeasurementToday.json();

        this.setState({
          currentTemperature: dataCurrent[dataCurrent.length-1].temperature,
          currentHumidity: dataCurrent[dataCurrent.length-1].humidity,
          numberOfAllMeasurement: dataNumberOfAllMeasurement,
          numberOfMeasurementThisMonth: dataNumberOfMeasurementThisMonth,
          numberOfMeasurmentToday: dataNumberOfMeasurementToday,
          sensors: dataSensors.map((s) => {
            return {value: s.id, display: s.sensorName}
          })
        });

        this.setChartData(dataTemperature, dataHumidity);

      }
      catch(error){
        console.log(error);
      }
  }
  
  componentDidMount(){
      this.fetchingLoopFunction();
      setInterval( () => {
        this.fetchingLoopFunction()
      }, 30000);
    
  }

  render() {
    return (
      <Container className="myContainer">
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
                    <select className='selectSensor'
                    value={this.state.currentSensor}
                    onChange={this.currentSensor}
                    >
                      {this.state.sensors.map((s) => 
                      <option key={s.value} value={s.value}>
                        {s.display}
                        </option>)}
                    </select>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
            <div className='measurementPanel'>
              <Line 
              data={this.state.chartTemperatureData}
              options={this.state.optionsTemperatureChart}
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
                  <Form.Text className="labelBody">{this.state.numberOfAllMeasurement}</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs='4'>
            <div className='quantityAll'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Pomiary w tym miesiącu:</Form.Label>
                  <Form.Text className="labelBody">{this.state.numberOfMeasurementThisMonth}</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col xs='4'>
            <div className='quantityAll'>
              <Form>
                <Form.Group>
                  <Form.Label className='labelHeader'>Pomiary dzisiaj:</Form.Label>
                  <Form.Text className="labelBody">{this.state.numberOfMeasurmentToday}</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default MeasurementPanel;