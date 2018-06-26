import React , {Component} from 'react'

const   mapStyle={
    height:'200px',
}
export default class GoogleMaps extends Component{


    componentDidMount(){
     new window.google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                 lat : 37.774929,
                 lng : -122.419416
            }
            
        });

    }
    render(){
      return (
      <div style={mapStyle} ref="map"></div>)
    }
}