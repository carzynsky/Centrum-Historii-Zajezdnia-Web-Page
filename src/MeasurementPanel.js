import React, { Component } from "react";
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import './Measurement.css';
import jsPDF from 'jspdf';

class MeasurementPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
          timePeriods: [{value: 0, display: 'Ostatnie 7 dni', request: 'LastWeek'}, {value: 1, display:'Aktualny rok', request: 'ByMonth'}, {value: 2, display: 'Ostatnie 5 lat', request: 'LastYears'}],
          selectedPeriod: '1',
          fetchInterval: '',
          firstFetched: false,
          selectedPeriodName: 'ByMonth',
          currentSensorName: '',
          currentSensor: '1',
          allSensors: '',
          currentTemperature: '',
          currentHumidity: '',
          currentTemperatureStatus: '',
          currentHumidityStatus: '',
          numberOfAllMeasurement: '',
          numberOfMeasurementToday: '',
          numberOfMeasurementThisMonth: '',
          showModal: false,
          sensors: [],
          editSensorData: {
            id: '',
            sensorName: '',
            sensorIpAddress: '',
            externalIpAddress: '',
            top: '',
            left: '',
            minTemperature: '',
            maxTemperature: '',
            minHumidity: '',
            maxHumidity: ''
          },
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
                fontSize: 12
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  color: 'transparent'
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
                  color: 'transparent'
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
                fontSize: 12
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  color: 'transparent'
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
                  color: 'transparent'
                },
                ticks: {
                  fontColor: 'rgb(255,255,255,0.78)'
                }
              }]
            }
          }
        }
        this.currentSensor = this.currentSensor.bind(this);
        this.setTimePeriod = this.setTimePeriod.bind(this);
        this.sendMail = this.sendMail.bind(this);
        this.editSensor = this.editSensor.bind(this);
        this.SensorMinTempEdit = this.SensorMinTempEdit.bind(this);
        this.SensorMaxTempEdit = this.SensorMaxTempEdit.bind(this);
        this.SensorMinHumiEdit = this.SensorMinHumiEdit.bind(this);
        this.SensorMaxHumiEdit = this.SensorMaxHumiEdit.bind(this);
      }

  currentSensor(event){
    console.log(this.state.sensors);
    this.state.currentSensor = event.target.value;
    var index = 0;
    for(var i=0; i<this.state.sensors.length; i++){
      if(this.state.sensors[i].value == event.target.value){
        index = i;
      }
    }
    
    this.state.currentSensorName = this.state.sensors[index].display;
    console.log(this.state.sensors);
    this.setState({
      editSensorData: {
          id: this.state.currentSensor,
          sensorName: this.state.currentSensorName,
          sensorIpAddress: this.state.allSensors[index].ipAddress,
          top: this.state.allSensors[index].top,
          left: this.state.allSensors[index].left,
          externalIpAddress: this.state.allSensors[index].externalIp,
          minTemperature: this.state.allSensors[index].minTemperature,
          maxTemperature:this.state.allSensors[index]. maxTemperature,
          minHumidity: this.state.allSensors[index].minHumidity,
          maxHumidity: this.state.allSensors[index].maxHumidity
      }});

    // this.setState({
    //   currentSensor: event.target.value,
    //   currentSensorName: this.state.sensors[event.target.value-1].display
    // });
    this.fetchingLoopFunction();
  }

  setTimePeriod(event){
    this.state.selectedPeriod = event.target.value;
    this.state.selectedPeriodName = this.state.timePeriods[event.target.value].request;
    this.fetchingLoopFunction();
  }

  async generatePDF(){
    var doc = new jsPDF('p', 'pt');
    var now = new Date();
    doc.setFont('courier');
    doc.setFontType('normal');
    
    let day = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

    const responseTemperature = await fetch('https://localhost:5001/api/measurement/'+ this.state.currentSensor + '/averageTemperatureLastYears');
    const responseHumidity = await fetch('https://localhost:5001/api/measurement/'+ this.state.currentSensor + '/averageHumidityLastYears');
    const responseInfo = await fetch('https://localhost:5001/api/measurement/'+ this.state.currentSensor + '/report');

    const dataTemperature = await responseTemperature.json();
    const dataHumidity = await responseHumidity.json();
    const dataInfo = await responseInfo.json();

    doc.setFontSize(16);
    doc.text(40,60, 'Raport roczny z dnia ' + day +'.' + month + '.' + year);
    doc.setFontSize(12);
    doc.text(40,100, 'Czujnik: ' + this.state.currentSensorName);
    doc.text(40,120, 'Liczba pomiarow: ' + this.state.numberOfAllMeasurement);
    doc.text(40,160, 'Srednia temperatura w ' + year +' roku: ' + dataTemperature[dataTemperature.length-1] + '°C');
    doc.text(40,180, 'Srednia temperatura w poprzednim roku: ' + dataTemperature[dataTemperature.length-2] + '°C');
    doc.text(40,200, 'Roznica miedzy ostatnim rokiem: +/- ' + (dataTemperature[dataTemperature.length-1] - dataTemperature[dataTemperature.length-2]) + '°C');
    doc.text(40,220, 'Maksymalna temperatura w ' + year + 'roku: ' + dataInfo[0] + '°C');
    doc.text(40,240, 'Minimalna temperatura w ' + year + ' roku: ' + dataInfo[1] + '°C');
    doc.text(40,260, 'Amplituda temperatury w ' + year +' roku: ' + dataInfo[2] + '°C');

    doc.text(40,300, 'Srednia wilgotnosc w ' + year +' roku: ' +  dataHumidity[dataHumidity.length-1] + '%');
    doc.text(40,320, 'Srednia wilgotnosc w poprzednim roku: ' + dataHumidity[dataHumidity.length-2] + '%');
    doc.text(40,340, 'Roznica miedzy ostatnim rokiem: +/- ' + (dataHumidity[dataHumidity.length-1] - dataHumidity[dataHumidity.length-2]) + '%');
    doc.text(40,360, 'Maksymalna wilgotnosc w ' + year + ' roku: ' + dataInfo[3] + '%');
    doc.text(40,380, 'Minimalna wilgotnosc w ' + year + ' roku: ' + dataInfo[4] + '%');
    doc.text(40,400, 'Amplituda wilgotnosci w ' + year + 'roku: ' + dataInfo[5] + '%');

    doc.save('raport-' + this.state.currentSensorName + '-' +  year +'.pdf');

  }
  setChartData(dataTemperature, dataHumidity, newLabels, title){
    this.setState({chartTemperatureData: {
      labels: newLabels,
      datasets: [
        {
          label: 'Średnia temperatura ' + title + ' dla czujnika: ' + this.state.currentSensorName,
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
      labels: newLabels,
        datasets: [
          {
            label: 'Średnia wilgotność powietrza ' + title +  ' dla czujnika ' + this.state.currentSensorName,
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

  SensorMinTempEdit(event){
    this.state.editSensorData.minTemperature = event.target.value;
  }

  SensorMaxTempEdit(event){
    this.state.editSensorData.maxTemperature = event.target.value;
  }

  SensorMinHumiEdit(event){
    this.state.editSensorData.minHumidity = event.target.value;
  }

  SensorMaxHumiEdit(event){
    this.state.editSensorData.maxHumidity = event.target.value;
  }

  async editSensor(){  
    console.log(this.state.editSensorData) ;
    fetch('https://localhost:5001/api/sensors/'+this.state.editSensorData.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.editSensorData.id,
        sensorName: this.state.editSensorData.sensorName,
        ipAddress: this.state.editSensorData.sensorIpAddress,
        externalIp: this.state.editSensorData.externalIpAddress,
        top: this.state.editSensorData.top,
        left: this.state.editSensorData.left,
        minTemperature: this.state.editSensorData.minTemperature,
        maxTemperature: this.state.editSensorData.maxTemperature,
        minHumidity:  this.state.editSensorData.minHumidity,
        maxHumidity: this.state.editSensorData.maxHumidity
      })
    })
    .then(response => {
      this.handleClose();
      this.fetchingLoopFunction();
    })
  }

  handleShow = () => {
    console.log(this.state.editSensorData);
    this.setState({
      showModal: true
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false
    });
  }

  async fetchingLoopFunction(){
      try{
        const responseTemperature = await fetch('https://localhost:5001/api/measurement/'+ this.state.currentSensor + '/averageTemperature' + this.state.selectedPeriodName);
        const responseHumidity = await fetch('https://localhost:5001/api/measurement/'+ this.state.currentSensor + '/averageHumidity' + this.state.selectedPeriodName);
        const responseCurrent = await fetch('https://localhost:5001/api/measurement/' + this.state.currentSensor);
        const responseSensors = await fetch('https://localhost:5001/api/sensors');
        const responseNumberOfAllMeasurement = await fetch('https://localhost:5001/api/measurement/' + this.state.currentSensor + '/numberOfAllMeasurement');
        const responseNumberOfMeasurementThisMonth = await fetch('https://localhost:5001/api/measurement/' + this.state.currentSensor + '/numberOfMeasurementThisMonth');
        const responseNumberOfMeasurementToday = await fetch('https://localhost:5001/api/measurement/' + this.state.currentSensor + '/numberOfMeasurementToday');

        const dataTemperature = await responseTemperature.json();
        const dataHumidity = await responseHumidity.json();
        const dataCurrent = await responseCurrent.json();
        const dataSensors = await responseSensors.json();
        const dataNumberOfAllMeasurement = await responseNumberOfAllMeasurement.json();
        const dataNumberOfMeasurementThisMonth = await responseNumberOfMeasurementThisMonth.json();
        const dataNumberOfMeasurementToday = await responseNumberOfMeasurementToday.json();

        console.log(dataSensors);
        this.setState({
          currentTemperature: dataCurrent[dataCurrent.length-1].temperature,
          currentHumidity: dataCurrent[dataCurrent.length-1].humidity,
          numberOfAllMeasurement: dataNumberOfAllMeasurement,
          numberOfMeasurementThisMonth: dataNumberOfMeasurementThisMonth,
          numberOfMeasurementToday: dataNumberOfMeasurementToday,
          sensors: dataSensors.map((s) => {
            return {value: s.id, display: s.sensorName}
          }),
          allSensors: dataSensors,
          currentSensorName: dataSensors[0].sensorName
        });

        if(!this.state.firstFetched){
          this.setState({
            editSensorData: {
                id: this.state.currentSensor,
                sensorName: this.state.currentSensorName,
                sensorIpAddress: this.state.allSensors[0].ipAddress,
                top: this.state.allSensors[0].top,
                left: this.state.allSensors[0].left,
                externalIpAddress: this.state.allSensors[0].externalIp,
                minTemperature: this.state.allSensors[0].minTemperature,
                maxTemperature:this.state.allSensors[0]. maxTemperature,
                minHumidity: this.state.allSensors[0].minHumidity,
                maxHumidity: this.state.allSensors[0].maxHumidity
            },
                firstFetched: true});
        }
       
          
        var tmpDate = new Date();
        var newLabels = [];
        var title = '';

        switch(this.state.selectedPeriod){
          case '0': {
            tmpDate.setDate(tmpDate.getDate()-7);
            for(var i=0; i<8; i++){
              newLabels.push(tmpDate.getDate() + '.' + (tmpDate.getMonth()+1));
              tmpDate.setDate(tmpDate.getDate() + 1);
            }
            title = 'w ciągu ostatnich 7 dni';
            break;
          }
          case '1':{
            newLabels = ['Styczeń', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień',
            'Pażdziernik', 'Listopad', 'Grudzień'];
            title = 'w danym miesiącu tego roku';
            break;
          }
          case '2':{
            newLabels = [tmpDate.getFullYear()-4, tmpDate.getFullYear()-3, tmpDate.getFullYear()-2, tmpDate.getFullYear()-1, tmpDate.getFullYear()];
            title = 'w ciągu ostatnich 5 lat';
            break;
          }
          default: {
            break;
          }
        }
        let sensorIndxTmp = 0;
        for(var i=0; i<this.state.sensors.length; i++){
          if(this.state.allSensors[i].id == this.state.currentSensor){
            sensorIndxTmp = i;
          }
        }
        let sent = false;
        if(this.state.currentTemperature > this.state.allSensors[sensorIndxTmp].maxTemperature){
          this.setState({
            currentTemperatureStatus: 'Uwaga! Zbyt wysoka temperatura!'
          })
          if(!sent){
            this.sendMail(dataCurrent[dataCurrent.length-1].dateTime, dataCurrent[dataCurrent.length-1].sensorId);
            sent = true;
          }
            
        }
        else if(this.state.currentTemperature < this.state.allSensors[sensorIndxTmp].minTemperature){
          this.setState({
            currentTemperatureStatus: 'Uwaga! Zbyt niska temperatura!'
          })
          if(!sent){
            this.sendMail(dataCurrent[dataCurrent.length-1].dateTime, dataCurrent[dataCurrent.length-1].sensorId);
            sent = true;
          }
        }
        else{
          this.setState({
            currentTemperatureStatus: ''
          })
        }

        if(this.state.currentHumidity > this.state.allSensors[sensorIndxTmp].maxHumidity){
          this.setState({
            currentHumidityStatus: 'Uwaga! Zbyt wysoka wilgotność powietrza!'
          })
          if(!sent){
            this.sendMail(dataCurrent[dataCurrent.length-1].dateTime, dataCurrent[dataCurrent.length-1].sensorId);
            sent = true;
          }
        }
        else if(this.state.currentHumidity < this.state.allSensors[sensorIndxTmp].minHumidity){
          this.setState({
            currentHumidityStatus: 'Uwaga! Zbyt niska wilgotność powietrza!'
          })
          if(!sent){
            this.sendMail(dataCurrent[dataCurrent.length-1].dateTime, dataCurrent[dataCurrent.length-1].sensorId);
            sent = true;
          }

        }
        else{
          this.setState({
            currentHumidityStatus: ''
          })
        }

        this.setChartData(dataTemperature, dataHumidity, newLabels, title);

      }
      catch(error){
        console.log(error);
      }
  }

  async sendMail(dt, sid){
    try{
      fetch('https://localhost:5001/api/measurement/alert', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          temperature: this.state.currentTemperature,
          humidity: this.state.currentHumidity,
          dateTime: dt,
          sensorId: sid
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
  componentDidMount(){
      this.fetchingLoopFunction();

      this.state.fetchInterval = setInterval( () => {
        this.fetchingLoopFunction()
      }, 30000);
  }
  componentWillUnmount(){
    clearInterval(this.state.fetchInterval);
  }

  render() {
    return (
      <Container className="myContainer">
        <Row>
            <Button className="Login-Button2" variant="dark" style={{position: 'absolute',  marginTop: '-50px', marginLeft: '30px', width: '160px', height: '35px'}} onClick={this.generatePDF.bind(this)}>Generuj roczny raport</Button>
            <Button className="Login-Button2" variant="dark" style={{position: 'absolute',   marginTop: '-50px', marginLeft: '200px', width: '200px', height: '35px'}} onClick={this.handleShow}>Ustaw parametry alarmów</Button>
         </Row>
        <Row className='firstRow'>
          <Col xs='3'>
            <div className='currentTemperature'>
              <Form>
                <Form.Group>
                  <Form.Label>           
                    <img
                      src={require("./images/temperature.png")} />
                  </Form.Label>
                  <Form.Text className="labelBody">{this.state.currentTemperature}°C</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col >
          <Col xs='3'>
            <div className='currentHumidity'>
              <Form>
                <Form.Group>
                <Form.Label>           
                    <img
                      src={require("./images/humidity.png")} />
                  </Form.Label>
                  <Form.Text className="labelBody">{this.state.currentHumidity}%</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col >
          <Col xs='2'>
              
          </Col>
          <Col xs='4'>
            <Row>
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
            </Row>
            <Row>
              <div className='sourceSensor'>
                <Form>
                  <Form.Group>
                    <Form.Label className='labelHeader'>Okres:</Form.Label>
                      <select className='selectSensor'
                      value={this.state.selectedPeriod}
                      onChange={this.setTimePeriod}
                      >
                        {this.state.timePeriods.map((t) => 
                        <option key={t.value} value={t.value}>
                          {t.display}
                          </option>)}
                      </select>
                  </Form.Group>
                </Form>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <div className='currentTemperatureStatus'>
              {this.state.currentTemperatureStatus}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <div className='currentHumidityStatus'>
              {this.state.currentHumidityStatus}
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
            <div className='measurementPanelTemperature'>
              <Line 
              data={this.state.chartTemperatureData}
              options={this.state.optionsTemperatureChart}
              width={90}
              height={50}
              />
            </div>
          </Col>
          <Col >
            <div className='measurementPanelHumidity'>
              <Bar 
              data={this.state.chartHumidityData}
              options={this.state.optionsHumidityChart}
              width={90}
              height={50}
              />
            </div>
          </Col>
        </Row>
        <div className='quantityAll'>
        <Row>           
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>
                    <img src={require("./images/quantity.png")} />
                  </Form.Label>
                </Form.Group>
              </Form>          
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>
                    <label style={{paddingTop: '20px'}}>Wszystkie: {this.state.numberOfAllMeasurement}</label>
                  </Form.Label>
                </Form.Group>
              </Form>         
            </Col>
            <Col>
              <Form>
                  <Form.Group>
                    <Form.Label>
                      <label style={{paddingTop: '20px'}}>Miesiąc: {this.state.numberOfMeasurementThisMonth}</label>
                    </Form.Label>
                  </Form.Group>
                </Form> 
            </Col>
            <Col>
              <Form>
                  <Form.Group>
                    <Form.Label>
                      <label style={{paddingTop: '20px'}}>Dzisiaj: {this.state.numberOfMeasurementToday}</label>
                    </Form.Label>
                  </Form.Group>
                </Form> 
            </Col>
      </Row>
        </div>
        <Modal show={this.state.showModal} onHide={this.state.handleClose} className="myModal">
        <Modal.Header>
          <Modal.Title>Edycja parametrów alarmów</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Minimalna temperatura</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.minTemperature} onChange={this.SensorMinTempEdit}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Maksymalna temperatura</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.maxTemperature} onChange={this.SensorMaxTempEdit}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Minimalna wilgotność</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.minHumidity} onChange={this.SensorMinHumiEdit}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Maksymalna wilgotność</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.maxHumidity} onChange={this.SensorMaxHumiEdit}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={this.editSensor}>
            Zatwierdź
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    );
  }
}
 
export default MeasurementPanel;