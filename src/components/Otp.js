import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import OtpInputs from 'react-native-otp-inputs'

export default class Otp extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.Mainscreen}>
                    <Image
                        source={require('../images/circular_logo.png')}
                        style={Styles.logo} />
                    <Text style={Styles.verificationtext}>Verification Code</Text>
                    <Text style={Styles.otptextstyle}>Enter the OTP sent to your Email</Text>
                    <OtpInputs handleChange={code => console.log(code)} numberOfInputs={5} />
                    <Text style={Styles.textstyle}>
                        <Text style={{ fontWeight: 'normal' }}>
                            Didn't  receive the code?
        <Text style={{ color: '#0054a6' }}>
                                Resend
        </Text>
                        </Text>
                    </Text>
                    <TouchableOpacity activeOpacity={.2} onPress={() => this.props.navigation.navigate('Login')}>
                        <LinearGradient colors={['#fb6347', '#f08247']}
                            style={Styles.LinearGradientStyle} >
                            <Text style={Styles.sgnbuttonText}>Submit OTP</Text>
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
    otptextstyle: {
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15,
        color: colors.lightgrey,
    },
    textstyle: {
        marginTop: 120,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15,
        color: colors.lightBlack,
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
    verificationtext: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.lightBlack,
        fontWeight: '700',
        margin: 5,
        marginRight: 10,

    },
    textstyle: {
        marginTop: 120,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15,
        color: colors.lightgrey,


    },
    sgnbuttonText: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFFFFF',
        marginRight: 20,
        fontSize: 18,
        fontWeight: '700',

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