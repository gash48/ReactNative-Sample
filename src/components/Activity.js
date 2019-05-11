import React, { Component } from 'react'
import { Alert, Text, View, FlatList, StyleSheet } from 'react-native'
import { Header, Icon } from 'react-native-elements'
export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        { id: '1', value: '25Mar2019              1h4m      20km' },
        { id: '2', value: '24Mar2019                              10km' },
        { id: '3', value: '23Mar2019                              10km' },
        { id: '4', value: '22Mar2019              6h9m     105km' },
        { id: '5', value: '21Mar2019                              10km' },
        { id: '6', value: '20Mar2019              6h40m    114km' },
        { id: '7', value: '19Mar2019              7h22m    118km' },
        { id: '8', value: '18Mar2019              6h40m    104km' },
        { id: '9', value: '17Mar2019                              10km' },
        { id: '10', value: '16Mar2019             5h41m    100km' },
        { id: '11', value: '15Mar2019             6h5m      93km' },
        { id: '12', value: '15Mar2019             6h5m      93km' },
        { id: '13', value: '15Mar2019             6h5m      93km' },
        { id: '14', value: '15Mar2019             6h5m      93km' },
        { id: '15', value: '15Mar2019             6h5m      93km' },
        { id: '16', value: '15Mar2019             6h5m      93km' },
        { id: '17', value: '15Mar2019             6h5m      93km' },
        { id: '18', value: '15Mar2019             6h5m      93km' }],
    };
  }
  FlatListItemSeparator = () => {
    return (
      //Item Separtor
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8', }} />
    );
  };
  GetItem(item) {
    //Function for click on an item
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Header
          placement="left"
          leftComponent={<HeaderLeft />}
          centerComponent={{ text: 'Activity', style: { color: '#fff', fontSize: 25, marginBottom: 30 } }}
          rightComponent={{ text: '', style: { color: '#fff', fontSize: 16, marginLeft: 20, marginBottom: 30 } }}
          containerStyle={{
          backgroundColor: '#FB6356',
          justifyContent: 'space-around',
          }}
        />
        <FlatList
          data={this.state.FlatListItems}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            //singles come here which will be repeatative for the flat screens  
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItem.bind(this, 'Id: ' + item.id + 'value:' + item.value)}>
                {item.value}
              </Text>

            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
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
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 54,
    alignItems: 'center',
  },
});