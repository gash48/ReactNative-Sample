import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Picker, Alert,} from "react-native";
import { Header, Icon,} from 'react-native-elements';
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';

export default class Report extends Component {

  constructor(){
     super();
     this.state={
       PickerSelectedVal : "",
       date:"2016-05-15"
       
     }
   }

   getSelectedPickerValue=()=>{
      Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
    }


  render() {
    return (
      <View style={styles.container}>
       <Header
    placement="left"
          leftComponent={<HeaderLeft />}
          centerComponent={{ text: 'Document Wallet', style: { color: '#fff', fontSize: 25, marginBottom: 30 } }}
          rightComponent={<HeaderRight />}
          containerStyle={{
            backgroundColor: '#FB6356',
            justifyContent: 'space-around',
          }}
        />
         <View style={{ flex: 1, padding: 20,flexDirection:'column' }}>
         <Text style={styles.Documenttext}>Document Type</Text>
      <Picker style={{marginLeft:10,fontSize:30}}
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
           <Picker.Item label="PUC" value="PUC" />
           <Picker.Item label="USA" value="USA" />
           <Picker.Item label="China" value="China" />
           <Picker.Item label="Russia" value="Russia" />
           <Picker.Item label="United Kingdom" value="United Kingdom" />
           <Picker.Item label="France" value="France" />
          </Picker>
          <Text style={styles.verificationtext}>Expiry Date</Text>
          <DatePicker
        style={{width: 380}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
     format="DD-MM-YYYY"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
            dateInput: {
            marginLeft: 10,
            alignItems:"flex-start",
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth:0,
          },
          dateIcon: {
         
           right:5,
            left: 0,
            top: 4,
            marginLeft: 0
          },
         }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
          <Text style={styles.Descriptiontext}>Description</Text>
          {/* <TextInput style={{borderBottomWidth:0,borderTopWidth:0}}
            placeholder ="Description"
            underlineColorAndroid='rgba(0,0,0,0)'>
          </TextInput> */}
          <TouchableOpacity activeOpacity={.2}>
                <LinearGradient colors={['#fb6347', '#fb6347', '#f08247',]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.LinearGradientStyle} >
                  <Text style={styles.buttontext}>ADD DOCUMENT</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={{fontSize:15,justifyContent:"center",alignItems:"center",marginTop:20,marginLeft:40}}>File size should not be greater than 1 MB</Text>
          </View>
          </View>
    )
  }

}
class HeaderLeft extends Component{
    render() {
        return (
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Icon name="arrow-left" type="font-awesome" color="#fff" />
          </View>
        )
      }
    }
class HeaderRight extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row'}}>
            <Icon name="paperclip" type="font-awesome" color="#fff" />
                        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  Documenttext:{
    fontSize: 27,
    color: colors.lightBlack,
    fontWeight: '600',
    marginHorizontal:10,
  },
  verificationtext:{
    marginTop: 20,
    fontSize: 27,
    color: colors.lightBlack,
    fontWeight: '600',
    marginHorizontal:10,
   },
   Descriptiontext:{
    marginTop: 50,
    fontSize: 27,
    color: colors.lightBlack,
    fontWeight: '600',
    marginHorizontal:10,
   },
   LinearGradientStyle:{
     marginTop:90,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    height: 60,
    borderRadius: 5,
},
buttontext: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#FFFFFF',
    marginRight: 20,
    fontSize: 18,
    fontWeight: '700',
},
});