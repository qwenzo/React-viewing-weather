import React,{Component} from'react'
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';
import Chart from '../components/Chart'

const pStyle = {
        verticalAlign: 'center',
        width:'150px'
  };


class WeatherList extends Component {

    constructor(props){
        super(props);
    this.mapWeather=this.mapWeather.bind(this);
    }

    mapWeather(weather){
        const name = weather.data.city.name;
        const humidities = weather.data.list.map((data)=>{return data.main.humidity});
        const pressures =weather.data.list.map((data)=>{return data.main.pressure});
        const temperatures =weather.data.list.map((data)=>{return data.main.temp});
       return   <tr>
           <td  style={pStyle}  >{name} </td>  
           <td style={pStyle} > <Chart data={temperatures} color="red"/> </td>  
           <td style={pStyle} > <Chart data={pressures} color="green"/> </td>  
           <td  style={pStyle} > <Chart data={humidities} color="blue"/> </td>  
       </tr>;
    }

    render(){
        console.log(this.props.weather);
        return (
            <table  className="table">
            <thead>
              <tr>
                <th >City</th>
                <th >Temprature</th>
                <th >Humadity</th>
                <th>Pressure</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.mapWeather)}
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