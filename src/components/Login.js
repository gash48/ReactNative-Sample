import React, { Component } from 'react'
import { Text, TextInput, Image, Alert, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';



export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }
    onLogin() {
        const { Username, Password } = this.state;

        Alert.alert('Credentials', `${Username} + ${Password}`);
    }
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
                            value={this.state.Username}
                            onChangeText={(Username) => this.setState({ Username })}
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            underlineColorAndroid="transparent"
                            keyboardtype={"email-address"}
                            autoCapitialize={"none"}
                            autoCorrect={false}
                        /></View>
                    <View style={Styles.Sectionstyle}>
                        <Image
                            source={require('../images/password_icon.png')}
                            style={Styles.inputicon} />
                        <TextInput style={Styles.input}
                            value={this.state.Password}
                            onChangeText={(Password) => this.setState({ Password })}
                            underlineColorAndroid="transparent"
                            placeholder={"Password"}
                            //placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                        />
                    </View>
                    <Text style={Styles.fgtpswrd}
                        onPress={() => this.props.navigation.navigate('Forgot')}>
                        Forgot your Password?</Text>

                    <TouchableOpacity activeOpacity={.2}>
                        <LinearGradient colors={['#fb6347','#fb6347', '#f08247',]} 
                         start={{ x: 0, y: 1}}
                         end={{ x: 1, y: 0 }}
                         style={Styles.LinearGradientStyle} >
                            <Text style={Styles.buttontext}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={Styles.textstyle}>Don't have an account
               </Text>
                    <TouchableOpacity style={Styles.signbuttoncontainer}
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={Styles.sgnbuttonText}>Sign Up</Text>
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
        alignSelf: 'center',
        marginBottom: 25,
        backgroundColor: colors.textinput,
        borderRadius: 150 / 2,


    },
    input: {
        flex: 1,
        height: 65,
        alignItems: 'center',
        marginLeft: 20,
        fontSize: 18,
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonbackground,
        borderColor: '#000',
        marginTop: 50,
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    inputbar: {
        height: 40,
        width: 9
    },
    textstyle: {
        marginTop: 50,
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 15,
        color: '#b7b7b7'

    },
    signbuttoncontainer: {
        height: 60,
        borderRadius: 5,
        backgroundColor: colors.textinput,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    buttontext: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    sgnbuttonText: {
        textAlign: 'center',
        fontWeight: 'normal',
        color: colors.lightBlack,
        fontSize: 18,
        fontWeight: '700'

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
    fgtpswrd: {
        fontSize: 15,
        textAlign: 'right',
        color: colors.lightBlack,
        margin: 5,
        fontWeight: '500',
        marginRight: 10,
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