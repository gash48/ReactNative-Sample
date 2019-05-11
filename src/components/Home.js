import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Header, Icon, Text, ListItem } from 'react-native-elements';
import Swiper from "react-native-web-swiper";


export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 7 }}>
        <Header
          containerStyle={{
            backgroundColor: "#FB6356",

          }}
          leftComponent={<HeaderLeft />}
          rightComponent={<HeaderRight />} />

        <View style={{ flex: 6 }}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 5 }}>
              <ScrollView horizontal={true} keyboardShouldPersistTaps="always" showsHorizontalScrollIndicator={false}>
                <QuickAccessBar access={arr} />
              </ScrollView>
              <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 20, marginTop: 30, borderRadius: 20, borderColor: '#dedede', borderWidth: 1, height: 300, elevation: 3 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Map Here</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}>
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Last Location'} subtitle={'IRIS Tech Park'} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} leftIcon={{ name: 'car', type: 'font-awesome', }} title={'Innova Crysta'} />
                  </View>
                  <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 17, alignItems: 'center', flexDirection: 'row' }}>
                    <View>
                      <Text
                        style={{ textDecorationLine: 'underline', color: "#fb6347" }}>Navigate To Car</Text>
                    </View>
                    <View>
                      <Text style={{ textDecorationLine: 'underline', color: "#fb6347" }}>Track Car</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 3, marginHorizontal: 20, marginVertical: 20, borderRadius: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#dedede', height: 300, elevation: 3, flexDirection: 'column' }}>
                <Swiper>
                  <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "white" }}>
                    <Text style={{ textDecorationLine: 'underline', color: "#fb6347", marginTop: 10, marginLeft: 20 }}>Last Trip</Text>
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Distance'} subtitle={'1.92KM'} />
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Duration'} subtitle={'11 minutes 4 seconds'} />
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Top Speed'} subtitle={'57 KM/h'} />
                  </View>


                  <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "white" }}>
                    <Text style={{ textDecorationLine: 'underline', color: "#fb6347", marginTop: 10, marginLeft: 20 }}>Last Week Trip</Text>
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Distance'} subtitle={'1.92KM'} />
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Duration'} subtitle={'11 minutes 4 seconds'} />
                    <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Top Speed'} subtitle={'57 KM/h'} />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "white" }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ textDecorationLine: 'underline', color: "#fb6347", marginTop: 10, marginLeft: 20 }}>Over All</Text>
                      <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Distance'} subtitle={'1.92KM'} />
                      <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Duration'} subtitle={'11 minutes 4 seconds'} />
                      <ListItem containerStyle={{ backgroundColor: 'transparent' }} title={'Top Speed'} subtitle={'57 KM/h'} />
                    </View>
                    </View>

                </Swiper>
                <View style={{flex:0.2,backgroundColor:'#fb6347',borderBottomLeftRadius:10,borderBottomRightRadius:10}}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}

class HeaderRight extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <Image style={{ height: 30, width: 30, marginRight: 30, marginTop: 1 }} source={require('../images/cartrack.png')}></Image>
        <Icon name="bell" type="font-awesome" color="#fff" size={20} marginRight={30} marginTop={10} />
        <Icon name="ellipsis-v" type="font-awesome" color="#fff" size={20} marginTop={10} />
      </View>
    );
  }
}
class HeaderLeft extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <Text style={{ color: 'white', fontSize: 20, fontStyle: 'normal', }}>Hello Gaurav</Text>
      </View>
    )
  }
}
class QuickAccessBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { access } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {access.map((ele, key) => (
          <View style={{ width: 75, height: 50, alignItems: 'center', backgroundColor: "#fb6347" }} key={key}>
            <Icon raised name="user-o" type="font-awesome" color="#f50" />
            <Text>{ele.label}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const homeStyles = {};

const arr = [
  {
    label: 'Trends',
    imageSrc: ''
  },
  {
    label: 'Analytics Reports',
    imageSrc: ''
  },
  {
    label: 'Service history',
    imageSrc: ''
  },
  {
    label: 'Roadside',
    imageSrc: ''
  },
  {
    label: 'Activity',
    imageSrc: ''
  },
  {
    label: 'Roadside II',
    imageSrc: ''
  },
  {
    label: 'Roadside III',
    imageSrc: ''
  },
  {
    label: 'Sports',
    imageSrc: ''
  }
];
