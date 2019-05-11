import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Button } from 'react-native'
import { Header, Icon,} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';


export default class Documentwallet extends Component {
  
  render() {
    return (
      <View style={{flex:1}}>
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
          <Text style={{fontSize:18,}}>Document Type</Text>
              <TouchableOpacity activeOpacity={.2}>
                <LinearGradient colors={['#fb6347', '#fb6347', '#f08247',]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={Styles.LinearGradientStyle} >
                  <Text style={Styles.buttontext}>ADD DOCUMENT</Text>
                </LinearGradient>
                <Text style={{fontSize:15,justifyContent:"center",alignItems:"center",marginTop:20,marginLeft:40}}>File size should not be greater than 1 MB</Text>
              </TouchableOpacity>
              <Button title="Press Me">           
              <Text>Dark Large</Text>
              </Button>
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
const Styles= {
    LinearGradientStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    height: 60,
    borderRadius: 5,
    },
    buttontext:{
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFFFFF',
        marginRight: 20,
        fontSize: 18,
        fontWeight: '700',
    
    }

}
