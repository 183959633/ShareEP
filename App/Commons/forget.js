"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  Linking,
  NetInfo,
  Platform,
  TextInput,
  Dimensions,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  TouchableOpacity,
} from "react-native"
import {
  StackNavigator,
  TabNavigator,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation'
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import CustomerHeadView from "./CustomerHeadView"
import Icon from "react-native-vector-icons/FontAwesome"
import LCCountDownButton from "react-native-countdownbutton"
export default class Forget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: "",
      phone: "",
      pcode: ""
    }
  }
  _countDownButtonPressed() {
    // 1s 后触发倒计时  例如做网络请求后的再读秒
    this.timer = setTimeout(this._triggerCount.bind(this), 0);
  }
  // 拿到按钮，开始倒计时
  _triggerCount() {
    let button = this.countDownButton;
    button.startCountDown();
  }
  _getpcode = () => {
    // alert("获取短信验证码==")
  }
  _next = () => {
    let { navigate } = this.props.navigation
    navigate('Forgetcode')
  }
  //手机号码校验
  _checkMobile(str) {
    let re = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/
    if (!re.test(str)) {
      this.setState({ showText: "手机号码格式有误!" })
    } else {
      this.setState({ showText: "手机号码可用!" })
    }
  }
  _headerLeft = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View style={[styles.container]}>
        <CustomerHeadView 
          title={"忘记密码"}
          left_IconName={"angle-left"}
          left_onPress={this._headerLeft}/>
        <TextInput
          style={[styles.phoneTextInputBox]}
          maxLength={11}
          placeholder="请输入手机号码!"
          clearButtonMode={"while-editing"}
          onChangeText={(phone) => {
            this.setState({ phone })
            this._checkMobile(phone)
          }
          }
        />
        <Text style={[styles.showTextBox]}>{this.state.showText}</Text>
        <View style={[styles.pcodeBox]}>
          <TextInput
            style={[styles.pcodeTextInputBox]}
            placeholder="请输入验证码!"
            maxLength={6}
            onChangeText={(pcode) => this.setState({ pcode })}
          />
          <LCCountDownButton frameStyle={[styles.countDownButtonBox]}
            beginText='获取验证码'
            endText='再次获取验证码'
            count={10}
            pressAction={() => {
              this.countDownButton.startCountDown()
              this._getpcode()
            }}
            changeWithCount={(count) => `${count}s后重新获取`}
            id='register'
            ref={(e) => { this.countDownButton = e }}
          />
        </View>
        <View style={[styles.nextBox]}>
          <Text
            onPress={this._next}
            allowFontScaling={true}
            style={[styles.textBox]}>下一步</Text>
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
  pcodeBox: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 8,
    height: 40,
    flexDirection: "row",
    // backgroundColor: "white",
  },
  pcodeTextInputBox: {
    flex: 2,
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "white",
  },
  countDownButtonBox: {
    flex: 1,
    marginLeft: 20,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  nextBox: {
    height: 40,
    width: 0.4 * WIDTH,
    marginTop: 40,
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