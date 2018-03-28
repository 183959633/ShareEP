"use strict"
import React, { Component } from "react"
import {
  Text,
  View,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native"
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height
import CustomerHeadView from "../Commons/CustomerHeadView"
import DatePicker from 'react-native-datepicker'
import Picker from 'react-native-picker'
import Icon from "react-native-vector-icons/FontAwesome"
export default class Recordbloodsugar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:['早餐前',"涂抹前","涂抹后"],
      date: "2016-05-15",
    }
  }
  //自定义导航headerLeft
  _headerLeft = () => {
    Picker.hide()
    this.props.navigation.goBack()
  }
  //自定义导航headerRight
  _headerRight = () => {
    Picker.hide()
  }
  //手动调用DatePicker
  _getDatePicker = () => {
    Picker.hide()
    this.datePicker.onPressDate()
  }
  _getPicker = () => {
    Picker.show();
  }
  componentDidMount=()=>{
    let data = this.state.data
    Picker.init({
      pickerData: data,
      pickerTitleText: "",
      selectedValue: [0],
      onPickerConfirm: data => {
        this.setState({ data})
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.HeaderViewBox]}>
          <Icon
            style={{ marginTop: 18, marginLeft: 14, marginRight: 14 }}
            name="angle-left"
            size={30}
            color={"#ee735c"}
            onPress={this._headerLeft}
          />
          <Text style={[styles.HeaderTextBox]}>记录我的血糖</Text>
          <Icon
            style={{ marginTop: 26, marginRight: 10 }}
            name={"save"}
            size={22}
            color={"#ee735c"}
            onPress={this._headerRight}
          />
        </View>
        <View style={[styles.ItemBox]}>
          <Text style={[styles.textBox]}>记录时间</Text>
          <TouchableOpacity
            style={[styles.OpacityBox]}
            activeOpacity={0.6}
            onPress={this._getDatePicker}>
            <DatePicker
              style={[styles.DatePickerBox]}
              date={this.state.date}
              mode="date"
              showIcon={false}
              format="YYYY-MM-DD"
              // minDate="2016-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  fontSize: 14,
                  borderWidth: 0,
                  marginLeft: -100,
                  marginBottom: 30,
                  // backgroundColor: "#cd1",
                }
              }}
              ref={(picker) => { this.datePicker = picker }}
              onDateChange={(date) => { this.setState({ date: date }) }}
            />
            <Icon
              style={[styles.IconBox]}
              name={"chevron-circle-down"}
              size={20}
              color={"rgb(180,180,180)"}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.ItemBox]}>
          <Text style={[styles.textBox]}>血糖时段</Text>
          <TouchableOpacity
            style={[styles.OpacityBox]}
            activeOpacity={0.6}
            onPress={this._getPicker}>
            <Text style={[styles.DatePickerBox]}>{this.state.data[0]}</Text>
            <Icon
              style={[styles.IconBox]}
              name={"chevron-circle-down"}
              size={20}
              color={"rgb(180,180,180)"}
            />
          </TouchableOpacity>
        </View>
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
  ItemBox: {
    width: WIDTH,
    height: 40,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgb(200,200,200)",

  },
  textBox: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    textAlign: "center",
    color: "rgb(72,134,243)",
    backgroundColor: "rgb(220,220,220)",
  },
  OpacityBox: {
    flex: 3,
    flexDirection: "row",
  },
  DatePickerBox: {
    flex: 7,
    // fontSize: 18,
    paddingTop: 12,
    paddingLeft: 60,
    backgroundColor: "red",

  },
  IconBox: {
    flex: 1,
    paddingTop: 8,
    marginLeft: 10,
  }
})
