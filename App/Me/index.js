"use strict"
import React, { Component } from "react"
import {
  AppRegistry,
  Text,
  View,
  Alert,
  Image,
  Linking,
  NetInfo,
  Platform,
  Dimensions,
  StyleSheet,
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
import CustomerHeadView from "../Commons/CustomerHeadView"
import Icon from "react-native-vector-icons/FontAwesome"
export default class Me extends Component {
  static navigationOptions = () => ({
    header: null,
  })
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  _sign = () => {
    Alert.alert(
      'Alert Title',
      "alertMessage",
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
        { text: 'OK', onPress: () => console.log('OK Pressed!') }
      ]
    )
  
    // let { navigate } = this.props.navigation
    // navigate('Sign')
  }
  _messagelist = () => {
    let { navigate } = this.props.navigation
    navigate('Messagelist')
  }
  _bloodsugar = () => {
    let { navigate } = this.props.navigation
    navigate('Bloodsugar')
  }
  _logout = () => {
    AsyncStorage.removeItem("user")
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
  render() {
    return (
      <View style={[styles.container]}>
        <CustomerHeadView title={"我的"}/>
        <View style={[styles.headBox]}>
          <TouchableOpacity
            style={[styles.opacityBox]}
            activeOpacity={0.6}>
            <Image
              style={[styles.imageBox]}
              source={{ uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2950587800,2884409868&fm=27&gp=0.jpg" }} />
          </TouchableOpacity>
          <Text style={[styles.textBox]}>蔡文姬</Text>
        </View>

        <View style={[styles.containerBox]}>
          <TouchableOpacity
            style={[styles.detailBox]}
            onPress={this._sign}
            activeOpacity={0.6}>
            <Icon
              style={[styles.iconBox]}
              name="gift"
              size={26}
              color={"#ee735c"}
            />
            <Text style={[styles.detailtextBox]}>签到</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.detailBox]}
            onPress={this._messagelist}
            activeOpacity={0.6}>
            <Icon
              style={[styles.iconBox]}
              name="comments"
              size={26}
              color={"#ee735c"}
            />
            <Text style={[styles.detailtextBox]}>消息</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.detailBox]}
            onPress={this._bloodsugar}
            activeOpacity={0.6}>
            <Icon
              style={[styles.iconBox]}
              name="heartbeat"
              size={26}
              color={"#ee735c"}
            />
            <Text style={[styles.detailtextBox]}>血糖</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.logoutViewBox]}>
          <Text
            onPress={this._logout}
            style={[styles.logouttextBox]}>退出登录</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headBox: {
    width: WIDTH,
    height: 100,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "rgb(180,180,180)",
  },
  opacityBox: {
    width: 60,
    height: 60,
    marginLeft: 30,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "rgb(208,208,208)",
  },
  imageBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textBox: {
    fontSize: 18,
    marginLeft: 30,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  containerBox: {
    width: WIDTH,
    height: 100,
    marginTop: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "rgb(180,180,180)",
  },
  detailBox: {
    width: WIDTH / 3,
    height: 100,
    // marginTop: 20,
    alignItems: "center",
    borderRightWidth: 2,
    borderColor: "rgb(180,180,180)",
  },
  iconBox: {
    marginTop: 20,
  },
  detailtextBox: {
    marginTop: 20,
  },
  logoutViewBox: {
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 0.21 * HEIGHT,
    borderRadius: 8,
    backgroundColor: "#ee735c",
  },
  logouttextBox: {
    marginTop: 11,
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  }
})