"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  Image,
  Linking,
  NetInfo,
  Platform,
  StyleSheet,
  AppRegistry,
  AsyncStorage
} from "react-native"
import {
  StackNavigator,
  TabNavigator,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation'
import Home from "./App/Home/index"
import Me from "./App/Me/index"
import Login from "./App/Me/login"
import Sign from "./App/Me/sign"
import Messagelist from "./App/Me/messagelist"
import Bloodsugar from "./App/Me/bloodsugar"
import Recordbloodsugar from "./App/Me/recordbloodsugar"
import Register from "./App/Commons/register"
import Forget from "./App/Commons/forget"
import Registercode from "./App/Commons/registercode"
import Forgetcode from "./App/Commons/forgetcode"
import Icon from "react-native-vector-icons/FontAwesome"
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
// 初始化TabNavigator
const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      title: "首页",
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={26} color={tintColor} />,
      headerStyle: {
        backgroundColor: 'rgb(248,248,248)'
      },
      headerTitleStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'rgb(35,35,35)'
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      header: null,
      title: "我的",
      tabBarIcon: ({ tintColor }) => <Icon name="user-circle" size={24} color={tintColor} />,
      headerStyle: {
        backgroundColor: 'rgb(248,248,248)'
      },
      headerTitleStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'rgb(35,35,35)'
      },
    },
  },
},
  {
    tabBarPosition: "bottom",
    swipeEnabled: false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    upperCaseLabel: false, // 是否使标签大写，默认为true。
    tabBarOptions: {
      indicatorStyle: {
        //选项卡下划线
        backgroundColor: "transparent",
      },
      // tabbar的样式
      style: {
        height: Platform.OS === "ios" ? 49 : 59,
        backgroundColor: "rgb(248,248,248)",
      },
      pressColor: "transparent",//material涟漪效果的颜色
      showIcon: true, 
      activeTintColor: '#ee735c', // label和icon的前景色 （选中）。
      inactiveTintColor: 'rgb(142,142,142)', // label和icon的前景色 (未选中)。
      activeBackgroundColor: 'rgb(248,248,248)', //label和icon的背景色（选中)
      inactiveBackgroundColor: 'rgb(248,248,248)', // label和icon的背景色（未选中） 
    }
  })
// 初始化StackNavigator
const RootNav = StackNavigator({
//设置 RootNav
  Tabs: {
    screen: Tabs
  },
  // 注册跳转页面
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Sign: {
    screen: Sign,
    navigationOptions: {
      header: null,
    }
  },
  Messagelist: {
    screen: Messagelist,
    navigationOptions: {
      header: null,
    }
  },
  Bloodsugar: {
    screen: Bloodsugar,
    navigationOptions: {
      header: null,
    }
  },
  Register:{
    screen: Register,
    navigationOptions: {
      header: null,
    }
  },
  Forget: {
    screen: Forget,
    navigationOptions: {
      header: null,
    }
  },
  Registercode: {
    screen: Registercode,
    navigationOptions: {
      header: null,
    }
  },
  Forgetcode: {
    screen: Forgetcode,
    navigationOptions: {
      header: null,
    }
  },
  Recordbloodsugar: {
    screen: Recordbloodsugar,
    navigationOptions: {
      header: null,
    }
  }
}, {
    // initialRouteName: 'Login',
    mode: 'card',
    headerMode: 'screen',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
  })
  let user
  AsyncStorage.getItem("user")
    .then((data) => {
      if (data===null) {
          const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'Login' })
          ]
        })
        // this.props.navigation.dispatch(resetAction)
      }else{
        const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'Tabs' })
          ]
        })
        // this.props.navigation.dispatch(resetAction)
      }
    }) 

export default class App extends Component {
  render() {
    return (
      <RootNav />
    )
  }
}
