/**
 * @author lovebing
 */

import React, {
  Component,
  PropTypes
} from 'react'

import {
  MapView,
  MapTypes,
  Geolocation
} from 'react-native-baidu-map'

import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  AppRegistry,
  TouchableHighlight
} from 'react-native'

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
export default class BaiduMapDemo extends Component {

  constructor() {
    super()
    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      // center: {
      //   // longitude: 113.981718,
      //   // latitude: 22.542449
      // },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      // markers: [{
      //   longitude: 113.981718,
      //   latitude: 22.542449,
      //   title: "Window of the world"
      // }]
    }
  }
  _GetLocation = () => {
    Geolocation.getCurrentPosition()
      .then(data => {
        console.warn(JSON.stringify(data))
        this.setState({
          zoom: 15,
          marker: {
            latitude: data.latitude,
            longitude: data.longitude,
            title: 'Your location'
          },
          center: {
            latitude: data.latitude,
            longitude: data.longitude,
            rand: Math.random()
          }
        })
      })
      .catch(e => {
        console.warn(JSON.stringify(e), 'error')
      })
  }
  componentDidMount() {
    this._GetLocation()
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          markers={this.state.markers}
          onMarkerClick={(e) => {
            console.warn(JSON.stringify(e))
          }}
          onMapClick={(e) => {
          }}
        >
        </MapView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: WIDTH,
    height: HEIGHT,
  }
})