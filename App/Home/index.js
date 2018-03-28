"use strict"
import React, { Component } from "react"
import {
  AppRegistry,
  Text,
  View,
  Image,
  Linking,
  NetInfo,
  Platform,
  Dimensions,
  StyleSheet,
  AsyncStorage
} from "react-native"
// jfXDxb9nX7Aw9O8LMyYIecIbAeXWAZdH
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import BaiduMapDemo from "./BaiduMapDemo"
import CustomerHeadView from "../Commons/CustomerHeadView"
export default class Home extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <CustomerHeadView title={"首页"}/>
        <BaiduMapDemo />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
