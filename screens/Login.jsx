import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//Styles
import Styles from '../components/Styles';
import { AntDesign } from '@expo/vector-icons';
//Componnts
import MaskedInput from '../components/MaskedInput';
import CustomBtn from '../components/CustomBtn';

const Login = () => {
    const navigation = useNavigation();
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [isLoginSelected, setIsLoginSelected] = useState(false);
    const [isSignUpSelect, setIsSignUpSelected] = useState(true);


    handleLoginSelected = () => {
        setIsLoginSelected(!isLoginSelected);
        setIsSignUpSelected(!isSignUpSelect)
    }

    handleSignUpSelected = () => {
        setIsSignUpSelected(!isSignUpSelect);
        setIsLoginSelected(!isLoginSelected)
    }

    return (
        <View>
            <Image style={Styles.slashImage} source={require('../images/bepremium.jpg')} />

            {/* login-Signup */}
            <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: 120, top: '10%', left: '10%' }}>
                <Pressable onPress={handleLoginSelected}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Login</Text>
                    {isLoginSelected ? <View style={{ width: 50, borderTopColor: '#D0FD3E', borderWidth: 3, top: '10%' }} /> : null}
                </Pressable>

                <Pressable onPress={handleSignUpSelected}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Sign up</Text>
                    {isSignUpSelect ? <View style={{ width: 50, borderTopColor: '#D0FD3E', borderWidth: 3, top: '10%' }} /> : null}
                </Pressable>
            </View>

            {/* textView */}
            <View style={Styles.slashTxt}>
                <Text style={{ color: 'white', fontSize: 35, fontWeight: '800' }}>NICE TO SEE YOU,</Text>
                <Text style={{ color: 'white', fontSize: 35, fontWeight: '900', marginTop: 10 }}>PARTNER</Text>
            </View>

            {/* container */}
            <View style={Styles.slashView} />

            {/* inputs */}
            <View style={{ position: 'absolute', top: '95%', alignSelf: 'center' }}>
                <MaskedInput
                    style={Styles.input}
                    value={mail}
                    onValueChange={null}
                    placeholder='Email'
                    placeholderTextColor='white'
                    mask='email' />

                <MaskedInput
                    style={Styles.input}
                    value={pass}
                    onValueChange={null}
                    placeholder='Password'
                    placeholderTextColor='white'
                    mask='password'
                    secureTextEntry={true} />
            </View>

            {/* forgotPassword */}
            <View style={{ position: 'absolute', top: '125%', alignSelf: 'flex-end', right: '05%' }}>
                <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={{ color: '#D0FD3E', fontSize: 15, fontWeight: '600' }}>Forgot Password</Text>
                </Pressable>
            </View>

            {/* optionsLogin */}
            <View style={{ position: 'absolute', top: '135%', flexDirection:'row',alignSelf: 'flex-start', justifyContent: 'space-between', left: '05%', width:'35%' }}>
                <Pressable onPress={() => console.log('Pachurrao_Twiiter')} style={{ backgroundColor: '#3A3A3C', width: 54, height: 54, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <AntDesign name="twitter" size={30} color="white" />
                </Pressable>
                <Pressable onPress={() => console.log('Pachurrao_Google')} style={{ backgroundColor: '#3A3A3C', width: 54, height: 54, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <AntDesign name="google" size={30} color="white" />
                </Pressable>
            </View>

            {/* loginBtn */}
            <View style={{ position: 'absolute', top: '140%', flexDirection:'row',alignSelf: 'flex-end', justifyContent: 'space-between', right: '05%', width:'35%' }}>
                <CustomBtn title='Login' style={{width:'100%'}} onPress={() => navigation.navigate("Home")}/>
            </View>
        </View>
    )
}

export default Login
