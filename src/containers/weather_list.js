import React,{Component} from'react'
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';

class WeatherList extends Component {

    render(){
        console.log(this.props.weather);
        return (
            <table className="table">
            <thead>
              <tr>
                <th >City</th>
                <th >Temprature</th>
                <th >Humadity</th>
                <th>Pressure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        )

    }
}

function MapStateToProps(state){
    return{
       weather:state.weather
    }

}

export default connect(MapStateToProps,null)(WeatherList);