"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  Alert,
  Linking,
  NetInfo,
  Platform,
  TextInput,
  Dimensions,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  TouchableOpacity
} from "react-native"
import {
  StackNavigator,
  TabNavigator,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation'
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import CustomerHeadView from "../Commons/CustomerHeadView"
import Icon from "react-native-vector-icons/FontAwesome"
export default class Registercode extends Component {   
  constructor(props) {
    super(props)
    this.state = {
      showText:"",
      showTextagain:"",
      Password: "",
      Passagain: ""
    }
  }
  //密码校验
  _checkVerifier(str) {
    if (0<str.length<6) {
      this.setState({ showText: "密码不能小于6位数!" })
    } 
    if (str.length >=6) {
      this.setState({ showText: "密码可用!" })
    }

  }
  _checkVerifieragain = (Passagain)=>{
    if (this.state.Password !== Passagain) {
      this.setState({ showTextagain: "两次密码不一致!" })
    } 
    if (this.state.Password === Passagain) {
      this.setState({ showTextagain: "密码可用!" })
    } 
  }
  _Reg=()=>{
  }
  _headerLeft = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={[styles.container]}>
        <CustomerHeadView
          title={"设置密码"}
          left_IconName={"angle-left"}
          left_onPress={this._headerLeft} />
        <TextInput
          style={[styles.phoneTextInputBox]}
          secureTextEntry={true}
          placeholder="请输入密码!"
          clearButtonMode={"while-editing"}
          onChangeText={(Password) => {
            this.setState({ Password })
            this._checkVerifier(Password)}
          }
        />
        <Text style={[styles.showTextBox]}>{this.state.showText}</Text>
        <TextInput
          style={[styles.phoneTextInputBox, {marginTop:20}]}
          secureTextEntry={true}
          placeholder="请再次输入密码!"
          clearButtonMode={"while-editing"}
          onChangeText={(Passagain) => {
            this.setState({ Passagain })
            this._checkVerifieragain(Passagain)}
          }
        />
        <Text style={[styles.showTextBox]}>{this.state.showTextagain}</Text>
        <View style={[styles.regBox]}>
          <Text
            onPress={this._Reg}
            allowFontScaling={true}
            style={[styles.textBox]}>注 册</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneTextInputBox: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "white",
  },
  showTextBox: {
    marginTop: 8,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 14,
    color: "#ee735c"
  },
  regBox: {
    height: 40,
    width: 0.4 * WIDTH,
    marginTop: 20,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "#ee735c",
  },
  textBox: {
    marginTop: 11,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  }
})