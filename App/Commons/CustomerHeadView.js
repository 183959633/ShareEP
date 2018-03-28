"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet
} from "react-native"
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import Icon from "react-native-vector-icons/FontAwesome"
export default class CustomerHeadView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title : this.props.title,
      size  : this.props.size ? this.props.size : 30,
      color : this.props.color ? this.props.color : "#ee735c",
      left_IconName  : this.props.left_IconName,
      right_IconName : this.props.right_IconName 
    }
  }
  render() {
    return (
      <View style={[styles.HeaderViewBox]}>
        <Icon
          style={[styles.IconBox]}
          name={this.state.left_IconName}
          size={this.state.size}
          color={this.state.color}
          onPress={this.props.left_onPress}
        />
        <Text style={[styles.HeaderTextBox]}>{this.state.title}</Text>
        <Icon
          style={[styles.IconBox]}
          name={this.state.right_IconName}
          size={this.state.size}
          color={this.state.color}
          onPress={this.props.right_onPress}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderViewBox: {
    height: 64,
    width: WIDTH,
    flexDirection: "row",
    backgroundColor: 'rgb(248,248,248)'
  },
  HeaderTextBox: {
    flex: 2,
    fontSize: 18,
    marginTop: Platform.OS === "ios" ? 28 : 22,
    fontWeight: "600",
    textAlign: "center",
    color: 'rgb(35,35,35)',
  },
  IconBox: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : 18,
    marginLeft: 14,
    marginRight:14,
  }
})