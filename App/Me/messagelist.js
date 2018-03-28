"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  Linking,
  NetInfo,
  Picker,
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
// import SinglePicker from 'mkp-react-native-picker';
const options = [{
  key: 1,
  value: "Option1"
}, {
  key: 2,
  value: "Option2"
}, {
  key: 3,
  value: "Option3"
}]

const another_options = [{
  key: 1,
  value: "OptionA"
}, {
  key: 2,
  value: "OptionB"
}, {
  key: 3,
  value: "OptionC"
}];

const optionsGroup = [options]
export default class Messagelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Picker"
    }
    this.optionsGroupIndex = 0
  }

  _headerLeft = () => {
    this.props.navigation.goBack()
  }
  
  render(){
    return (
      <View style={[styles.container]}>
        <CustomerHeadView
          title={"消息列表"}
          left_IconName={"angle-left"}
          left_onPress={this._headerLeft} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SinglePicker:{
    backgroundColor: "red",
  }
})