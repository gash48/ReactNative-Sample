import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Header, Icon, Text, Card, ListItem } from 'react-native-elements';
import Swiper from 'react-native-web-swiper';
import MapView from 'react-native-maps';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 7 }}>
        <Header containerStyle={{ backgroundColor: '#FB6356', borderBottomWidth: 0 }} leftComponent={<HeaderLeft />} rightComponent={<HeaderRight />} />
        <View style={{paddingBottom:80}}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <QuickAccessBar access={arr} />
              <Card containerStyle={{ borderRadius: 10, elevation: 1 }} wrapperStyle={{ flex: 1, height: 300, justifyContent: 'space-between' }}>
                <View style={{ flex: 0.6 }}>
                  <MapView
                    showsUserLocation
                    style={{width:'100%', height:'100%'}}
                    initialRegion = {{
                    latitude: 13.139238380834923,
                    longitude: 80.25188422300266,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                  />
                </View>
                <View style={{ flex: 0.4, justifyContent: 'flex-end' }}>
                  <ListItem containerStyle={{ padding: 0 }} title={'Last Location'} />
                  <ListItem containerStyle={{ paddingHorizontal: 0, paddingVertical: 10 }} leftIcon={{ name: 'car', type: 'font-awesome' }} title={'Innova Crysta'} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text>Navigate To Car</Text>
                      <Icon name="chevron-right" size={14} type="font-awesome" containerStyle={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text>Last Location</Text>
                      <Icon name="chevron-right" size={14} type="font-awesome" containerStyle={{ marginLeft: 10 }} />
                    </View>
                  </View>
                </View>
              </Card>
              <View style={{ flex: 3, marginHorizontal: 20, marginVertical: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#dedede', height: 300, elevation: 1 }}>
                <Swiper controlsWrapperStyle={{backgroundColor: '#fb6347', borderBottomLeftRadius:10,borderBottomRightRadius:10}}	>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textDecorationLine: 'underline', color: '#fb6347', marginTop: 10, marginLeft: 20 }}>Last Trip</Text>
                    <ListItem title={'Distance'} subtitle={'1.92KM'} />
                    <ListItem title={'Duration'} subtitle={'11 minutes 4 seconds'} />
                    <ListItem title={'Top Speed'} subtitle={'57 KM/h'} />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{ textDecorationLine: 'underline', color: '#fb6347', marginTop: 10, marginLeft: 20 }}>Last Week Trip</Text>
                    <ListItem title={'Distance'} subtitle={'1.92KM'} />
                    <ListItem title={'Duration'} subtitle={'11 minutes 4 seconds'} />
                    <ListItem title={'Top Speed'} subtitle={'57 KM/h'} />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={{ textDecorationLine: 'underline', color: '#fb6347', marginTop: 10, marginLeft: 20 }}>Over All</Text>
                    <ListItem title={'Distance'} subtitle={'1.92KM'} />
                    <ListItem title={'Duration'} subtitle={'11 minutes 4 seconds'} />
                    <ListItem title={'Top Speed'} subtitle={'57 KM/h'} />
                  </View>
                </Swiper>
              </View>
            </ScrollView>
        </View>
      </View>
    );
  }
}

class HeaderRight extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image style={{ height: 30, width: 30, marginRight: 30 }} source={require('../images/cartrack.png')} />
        <Icon name="bell" type="font-awesome" color="#fff" size={20} marginRight={30} />
        <Icon name="ellipsis-v" type="font-awesome" color="#fff" size={20} />
      </View>
    );
  }
}
class HeaderLeft extends Component {
  render() {
    return (
      <View style={{ minWidth: 200, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, fontStyle: 'normal' }}>Hello Gaurav</Text>
      </View>
    );
  }
}
class QuickAccessBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { access } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 100, backgroundColor: 'blue' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {access.map((ele, key) => (
            <View style={{ width: 100, alignItems: 'center', backgroundColor: '#fb6347', paddingVertical: 10 }} key={key}>
              <Image source={ele.imageSrc} />
              <Text style={{ textAlign: 'center', color: 'white' }}>{ele.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const arr = [
  {
    label: 'Trends',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Analytics Reports',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Service history',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Roadside',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Activity',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Roadside II',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Roadside III',
    imageSrc: require('../images/car.png')
  },
  {
    label: 'Sports',
    imageSrc: require('../images/car.png')
  }
];
