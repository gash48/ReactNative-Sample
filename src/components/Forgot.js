import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, } from 'react-native'
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

export default class Forgot extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Mainscreen}>
                    <Image
                        source={require('../images/circular_logo.png')}
                        style={styles.logo} />
                    <Text style={styles.text}
                        onPress={() => this.props.navigation.navigate('Otp')}>
                        Forgot your Password?
             </Text>
                    <View style={styles.Sectionstyle}>
                        <Image
                            source={require('../images/email.png')}
                            style={styles.inputicon} />
                        <TextInput style={styles.input}
                            placeholder={"Enter your registred Email"}
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            underlineColorAndroid="transparent"
                            keyboardtype={"email-address"}
                            autoCapitialize={"none"}
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')}>
                    <LinearGradient colors={['#fb6347','#fb6347', '#f08247']}
                         start={{ x: 0, y: 1}}
                         end={{ x: 1, y: 0 }}
                            style={styles.LinearGradientStyle} >
                            <Text style={styles.buttontext}>Send OTP</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.textstyle}>
                        <Text style={{ fontWeight: 'normal' }}
                        onPress={() => this.props.navigation.navigate('Login')}>
                            Already have an account?
        <Text style={{ color: '#0054a6' }}>
                                Sign in
        </Text>
                        </Text>
                    </Text>
                </View>
            </View>

        )
    }
}
const styles = {
    container: {
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: 'white'

        },
    },
    //main screen
    Mainscreen: {
        flex: 1,
        marginTop: 0,
        display: 'flex',
        padding: 20,

    },
    // logo icon 
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 25,
        backgroundColor: 'white',
        borderRadius: 150 / 2,
    },
    //input icon for textinput icons
    inputicon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        marginLeft: 10,
        resizeMode: 'stretch',
        alignItems: 'center',

    },

    input: {
        flex: 1,
        height: 65,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 18,

    },
    text: {
        marginTop: 50,
        textAlign: 'center',
        fontWeight: 'normal',
        color: colors.lightBlack,
        fontSize: 18,
        fontWeight: '200'

    },
    // section style
    Sectionstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textinput,
        borderColor: '#000',
        height: 60,
        marginTop: 50,
        borderRadius: 5,
        margin: 10,

    },
    // text of button
    buttontext: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    textstyle: {
        marginTop: 120,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15,
        color: colors.lightBlack,

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
        marginBottom: 20
    },

}