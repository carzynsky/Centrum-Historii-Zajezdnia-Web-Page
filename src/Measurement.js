import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import './Measurement.css';

class Measurement extends Component {
    constructor(props){
        super(props);
        this.state = {mesm: []};
    }

    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        // this.setState({
        //     mesm: [{"MeasurementId": 1, "MeasurementTemperature": 23, "MeasurementHumidity": 95, 
        //     "MeasurementDatetime": "03/04/2020", "MeasurementSensorId": 2}, 
        //     {"MeasurementId": 2, "MeasurementTemperature": 22, "MeasurementHumidity": 96, 
        //     "MeasurementDatetime": "03/04/2020", "MeasurementSensorId": 1},
        //     {"MeasurementId": 3, "MeasurementTemperature": 22, "MeasurementHumidity": 90, 
        //     "MeasurementDatetime": "01/04/2020", "MeasurementSensorId": 1}]
        // })
        fetch('https://localhost:44340/api/measurement')
        .then(response => response.json())
        .then(data => {this.setState({mesm:data})});

    }
  render() {
    const {mesm} = this.state;
    console.log(mesm[0]);
    return (
        <div className="MeasurementPanel">
            <Table hover borderless>
              <thead>
                <tr>
                  <th>Temperatura</th>
                  <th>Wilgotność</th>
                  <th>Data pomiaru</th>
                  <th>Czujnik</th>
                </tr>
              </thead>
              <tbody>
                  {mesm.map((mes) =>{
                    return (
                      <tr key={mes.id}>
                      <td>{mes.temperature}</td>
                      <td>{mes.humidity}</td>
                      <td>{mes.dateTime}</td>
                      <td>{mes.sensors.sensorName}</td>
                      </tr>
                    )
                  }
                    )}
              </tbody>
            </Table>
          </div>
    );
  }
}
 
export default Measurement;