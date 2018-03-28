"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  Linking,
  NetInfo,
  Platform,
  Dimensions,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  TouchableOpacity,
} from "react-native"
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import CustomerHeadView from "../Commons/CustomerHeadView"
import Icon from "react-native-vector-icons/FontAwesome"
export default class Sign extends Component {
  _headerLeft = () => {
    this.props.navigation.goBack()
  }
  render(){
    return ( 
      <View style={[styles.container]}>
          <CustomerHeadView
            title={"积分签到"}
            left_IconName={"angle-left"}
            left_onPress={this._headerLeft} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})