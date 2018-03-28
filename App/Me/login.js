"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Alert,
  AlertIOS,
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
export default class Login extends Component {
  static navigationOptions = () => ({
    header: null,
  })
  constructor(props) {
    super(props)
    this.state = {
      showText:"",
      phone: "",
      pw: ""
    }
  }
  //手机号码校验
  _checkMobile(str) {
    let re = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/
    if (!re.test(str)) {
     this.setState({ showText:"手机号码格式有误!"})
    }else{
      this.setState({ showText: "手机号码可用!" })
    }
  }
  _login = () => {
    let data = {
      phone: this.state.phone,
      pw: this.state.pw
    }
    if (this.state.phone !== "" && this.state.pw !== "" && this.state.showText ==="手机号码可用!") {
      let user = JSON.stringify(data)
      AsyncStorage.setItem("user", user)
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Tabs', params: { user: user } })
        ]
      })
      this.props.navigation.dispatch(resetAction);
    } else {
      if (this.state. phone === "") {
        return Alert.alert("手机号不能为空!")
      }
      if (this.state.pw === "") {
        return Alert.alert("密码不能为空!")
      }
    }
  }
  _left = () => {
    let { navigate } = this.props.navigation
    navigate('Register')
  }
  _right = () => {
    let { navigate } = this.props.navigation
    navigate('Forget')
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.HeaderViewBox]}>
          <Text style={[styles.HeaderTextBox]}>登陆</Text>
        </View>
        <TextInput
          style={[styles.phoneTextInputBox]}
          underlineColorAndroid="transparent"
          clearButtonMode={"while-editing"}
          placeholder="请输入账号!"
          maxLength={11}
          onChangeText={(phone) => 
            {this.setState({ phone })
            this._checkMobile(phone)}
          }
        />
        <Text style={[styles.showTextBox]}>{this.state.showText}</Text>
        <TextInput
          style={[styles.pwTextInputBox]}
          secureTextEntry ={true}
          placeholder="请输入密码!"
          clearButtonMode={"while-editing"}
          onChangeText={(pw) => this.setState({ pw })}
        />
        <View style={[styles.loginViewBox]}>
          <Text
            onPress={this._login}
            style={[styles.logintextBox]}>登  陆</Text>
        </View>
        <View style={[styles.bottomBox]}>
          <Text
            allowFontScaling={true}
            onPress={this._left}
            style={[styles.leftTextBox]}>注册账号</Text>
          <Text
            allowFontScaling={true}
            onPress={this._right}
            style={[styles.rightTextBox]}>忘记密码</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239,239,239)",
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
    marginTop: 30,
    fontWeight: "600",
    textAlign: "center",
    color: 'rgb(35,35,35)',
  },
  phoneTextInputBox: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray'
  },
  showTextBox:{
    marginTop: 8,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 14,
    color: "#ee735c"
  },
  pwTextInputBox: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray'
  },
  loginViewBox: {
    height: 40,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 8,
    backgroundColor: "#ee735c",
  },
  logintextBox: {
    marginTop: 11,
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  },
  bottomBox: {
    height: 30,
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
  },
  leftTextBox: {
    flex: 1,
    fontSize: 16,
    color: "#ee735c",
    textAlign: "left",
  },
  rightTextBox: {
    flex: 1,
    fontSize: 16,
    color: "#ee735c",
    textAlign: "right",

  }
})