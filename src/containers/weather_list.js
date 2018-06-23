import React,{Component} from'react'

class WeatherList extends Component {

    render(){
        return (
            <table class="table">
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

export default WeatherList;