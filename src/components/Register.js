import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

export default class Register extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.Mainscreen}>
                    <Image
                        source={require('../images/circular_logo.png')}
                        style={Styles.logo} />
                    <View style={Styles.Sectionstyle}>
                        <Image
                            source={require('../images/email.png')}
                            style={Styles.inputicon} />
                        <TextInput style={Styles.input}
                            placeholder={"Username"}
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            keyboardtype={"email-address"}
                            underlineColorAndroid="transparent"
                            autoCapitialize={"none"}
                            autoCorrect={false}
                        /></View>
                    <View style={Styles.Sectionstyle}>
                        <Image
                            source={require('../images/password_icon.png')}
                            style={Styles.inputicon} />
                        <TextInput style={Styles.input}
                        underlineColorAndroid="transparent"
                            placeholder={"Password"}
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                        />
                    </View>
                    <View style={Styles.Sectionstyle}>
                        <Image
                            source={require('../images/password_icon.png')}
                            style={Styles.inputicon} />
                        <TextInput style={Styles.input}
                            placeholder={"Device_ID"}
                            underlineColorAndroid="transparent"
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                        />
                    </View>
                    <View style={Styles.Sectionstyle}>
                        <Image
                            source={require('../images/password_icon.png')}
                            style={Styles.inputicon} />
                        <TextInput style={Styles.input}
                            placeholder={"Name"}
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                            underlineColorAndroid="transparent"
                        />
                    </View>


                    <Text style={Styles.textstyle}>Already have an account?Sign in
                       </Text>
                    <TouchableOpacity activeOpacity={.2} onPress={() => this.props.navigation.navigate('Login')}>
                    <LinearGradient colors={['#fb6347','#fb6347', '#f08247']}
                         start={{ x: 0, y: 1}}
                         end={{ x: 1, y: 0 }}
                            style={Styles.LinearGradientStyle} >
                            <Text style={Styles.sgnbuttonText}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const Styles = {
    container: {
        flex: 1,
        padding: 10,

        backgroundColor: 'white'

    },
    Mainscreen: {
        flex: 1,
        marginTop: 0,
        display: 'flex',
        padding: 20,

    },
    logo: {
        width: 150,
        height: 150,
        backgroundColor: colors.textinput,
        borderWidth: 0.2,
        alignSelf: 'center',
        marginBottom: 25,

        borderRadius: 150 / 2,


    },
    input: {
        flex: 1,
        height: 65,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 18,
    },
    inputbar: {
        height: 40,
        width: 9
    },
    textstyle: {
        marginTop: 30,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15,
        color: '#b7b7b7'

    },
    signbuttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonbackground,
        borderColor: '#000',
        marginTop: 10,
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    sgnbuttonText: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFFFFF',
        marginRight: 20,
        fontSize: 18,
        fontWeight: '700',

    },
    inputicon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        marginLeft: 10,
        resizeMode: 'stretch',
        alignItems: 'center',

    },
    Sectionstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textinput,
        borderColor: '#000',
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    LinearGradientStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        marginTop: 10,
        height: 60,
        borderRadius: 5,
        margin: 10,
        marginBottom: 20,
    },
}