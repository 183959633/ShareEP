"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  FlatList,
  Platform,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native"
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import Echarts from 'native-echarts'
import Moment from 'moment'
import DatePicker from 'react-native-datepicker'
import Icon from "react-native-vector-icons/FontAwesome"

export default class Bloodsugar extends Component {
  constructor(props) {
    super(props)
    let nowTime = new Date()
    let dateFormat = Moment(nowTime).format("YYYY-MM-DD")
    this.state = {
      date: dateFormat,
      Morning: [2, 4, 7, 2, 2, 7, 23],
      Noon: [6, 9, 9, 2, 8, 7, 17],
      Night: [7, 10, 12, 18, 8, 5, 14],
      data: [{ date: " 今天", morning: "2", noon: "5", night: "8" },
      { date: " 今天", morning: "2", noon: "5", night: "8" },
      { date: " 今天", morning: "2", noon: "5", night: "8" },
      { date: " 今天", morning: "2", noon: "5", night: "8" },
      { date: " 今天", morning: "2", noon: "5", night: "8" },
      { date: " 今天", morning: "2", noon: "5", night: "8" },
      { date: " 今天", morning: "2", noon: "5", night: "8" }]
    }
  }
  _datepicker = () => {

  }
  _ListHeaderComponent = () => {
    return (
      <View style={[styles.Heads]}>
        <View style={[styles.ListHeaderBox]}>
          <Text style={[styles.ListHeaderItemBox]}>前七天</Text>
          <Text style={[styles.DatePickerBox]}>{this.state.date}</Text>
          <Text style={[styles.ListHeaderItemBox]}>后七天</Text>
        </View>
        <View style={[styles.ListHeaderBox]}>
          <Text style={[styles.ListHeaderItemBox]}>时间段</Text>
          <Text style={[styles.ListHeaderItemBox]}>早餐前</Text>
          <Text style={[styles.ListHeaderItemBox]}>涂抹前</Text>
          <Text style={[styles.ListHeaderItemBox]}>涂抹后</Text>
        </View>
      </View>)
  }
  _renderItem = (row) => {
    return (<View style={[styles.RowBox]}>
      <Text style={[styles.RowItemBox, { backgroundColor: "rgb(220,220,220)" }]}>{row.item.date}</Text>
      <Text style={[styles.RowItemBox]}>{row.item.morning}</Text>
      <Text style={[styles.RowItemBox]}>{row.item.noon}</Text>
      <Text style={[styles.RowItemBox]}>{row.item.night}</Text>
    </View>)
  }
  //自定义导航headerLeft
  _headerLeft = () => {
    this.props.navigation.goBack()
  }
  //自定义导航headerRight
  _headerRight = () => {
    let { navigate } = this.props.navigation
    navigate('Recordbloodsugar')
  }
  render() {
    const option = {
      //是否开启动画
      animation: false,
      //点击某一个点的数据的时候，显示出悬浮窗
      //可以手动选择现实几个图标
      legend: {
        animation: false,
        data: ['早餐前', '涂抹前', "涂抹后"]
      },
      //各种表格
      toolbox: {
        //改变icon的布局朝向
        orient: 'vertical',
        show: true,
        showTitle: false,
        feature: {
          //show是否显示表格，readOnly是否只读
          dataView: { show: true, readOnly: false },
          magicType: {
            //折线图  柱形图  总数统计   分开平铺
            //line', 'bar', 'stack', 'tiled'
            type: ['line', 'bar'],
          },

        }
      },
      xAxis: [
        {
          //从0点开始绘制
          boundaryGap: false,
          type: 'category',
          name: '天数',
          data: ['1', '2', '3', '4', '5', '6', '7']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '血糖指数(L)'
        }
      ],
      //图形的颜色组
      color: ['#ee735c', 'rgb(67,205,126)', "#cd1"],
      //需要显示的图形名称，类型，以及数据设置
      series: [
        {
          name: '早餐前',
          //默认显
          type: 'line',
          data: this.state.Morning
        },
        {
          name: '涂抹前',
          type: 'line',
          data: this.state.Noon
        },
        {
          name: '涂抹后',
          type: 'line',
          data: this.state.Night
        }
      ]
    }
    return (
      <View style={styles.Container}>
        <View style={[styles.HeaderViewBox]}>
          <Icon
            style={{ marginTop: 18, marginLeft: 14, marginRight: 14 }}
            name="angle-left"
            size={30}
            color={"#ee735c"}
            onPress={this._headerLeft}
          />
          <Text style={[styles.HeaderTextBox]}>血糖管理</Text>
          <Icon
            style={{ marginTop: 26, marginRight: 10 }}
            name={"pencil-square-o"}
            size={22}
            color={"#ee735c"}
            onPress={this._headerRight}
          />
        </View>
        <ScrollView
          keyboardDismissMode={"on-drag"}
        >
          <FlatList
            style={[styles.FlatListBox]}
            initialNumToRender={7}
            getItemLayout={(data, index) => ({ length: 40, offset: 40 * index, index })}
            ListHeaderComponent={this._ListHeaderComponent}
            data={this.state.data}
            renderItem={this._renderItem}
          />
          <Echarts
            option={option}
            height={260}
          />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  Heads: {
    width: WIDTH,
    height: 80
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
    marginRight: 14,
  },
  ListHeaderBox: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "rgb(220,220,220)",
  },
  FlatListBox: {
    marginBottom: 20,
  },
  MyListItemBox: {
    justifyContent: "space-between"
  },
  DatePickerBox:{
    flex: 2,
    padding: 12,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgb(129,129,129)"
  },
  ListHeaderItemBox: {
    flex: 1,
    fontSize: 14,
    padding: 12,
    fontWeight: "400",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgb(129,129,129)"
  },
  RowBox: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "white",
  },
  RowItemBox: {
    flex: 1,
    fontSize: 14,
    padding: 12,
    fontWeight: "400",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgb(129,129,129)"
  }
})