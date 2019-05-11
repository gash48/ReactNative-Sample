import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, CheckBox, Button } from 'react-native'
import { Header, Icon, ListItem } from 'react-native-elements'
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';



export default class Insurance extends Component {
  constructor() {
    super();
    this.state = {
      check: false
    }

  }
  CheckBoxTest() {
    this.setState({
      check: !this.state.check
    })
    alert("now value is " + !this.state.check)
  }
  render() {
    return (
      <View style={Styles.container}>
        <Header
          placement="left"
          leftComponent={<HeaderLeft />}
          centerComponent={{ text: 'Insurance', style: { color: '#fff', fontSize: 25, marginBottom: 30 } }}
          rightComponent={{ text: 'ADD POLICY', style: { color: '#fff', fontSize: 16, marginLeft: 20, marginBottom: 30 } }}
          containerStyle={{
            backgroundColor: '#FB6356',
            justifyContent: 'space-around',
          }}
        />

        <View style={Styles.Mainscreen}>
          <View style={{ flex: 1, marginTop: 10, marginHorizontal: 10, borderRadius: 6, borderColor: '#dedede', borderWidth: 1, height: 300, elevation: 3 }}>

            <Image style={Styles.logo} source={require('../images/Insurance/insuranc.png')} />
            <Text style={Styles.verificationtext}>Let our experts find out the
                                                    best quote for you</Text>
            <Text style={Styles.otptextstyle}>PS: Discount (NCB%)would be carried
                                                      forward </Text>

            <View style={{ flexDirection: 'row',marginHorizontal:10}}>
              <CheckBox style={{ borderColor: "grey", borderWidth: 0.1,fontSize:20, }} value={this.state.check} onChange={() => this.CheckBoxTest()} />

              <Text style={{
                fontWeight: 'normal', fontSize: 22,
              }}>
                Have you claimed Insurance in
                the past year?
</Text>
            </View>



            <View style={{ flex: 1, padding: 20 }}>
              <TouchableOpacity activeOpacity={.2}>
                <LinearGradient colors={['#fb6347', '#fb6347', '#f08247',]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={Styles.LinearGradientStyle} >
                  <Text style={Styles.buttontext}>ENQUIRE</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>


          </View>
        </View>


      </View>


    )
  }
}
class HeaderLeft extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <Icon name="arrow-left" type="font-awesome" color="#fff" />
      </View>
    )
  }
}

const Styles = {
  container: {
    flex: 1,

    backgroundColor: 'white'
  },
  otptextstyle: {
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    color: colors.lightgrey,
  },
  textstyle: {
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    color: colors.lightBlack,
  },
  Mainscreen: {
    flex: 1,
    marginTop: 0,
    display: 'flex',

  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  verificationtext: {
    marginTop: 20,
    fontSize: 27,
    textAlign: 'center',
    color: colors.lightBlack,
    fontWeight: '400',
    marginHorizontal:10,
   

  },
  textstyle: {
    marginTop: 120,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    color: colors.lightgrey,


  },
  buttontext: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#FFFFFF',
    marginRight: 20,
    fontSize: 18,
    fontWeight: '700',

  },
  LinearGradientStyle: {

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    height: 60,
    borderRadius: 5,
  },
}