import { View, Text, TouchableWithoutFeedback, SafeAreaView, Keyboard } from 'react-native'
import React from 'react'
import { useState } from 'react'

import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'

import useAuthStore from 'store/authStore'

const SignupScreen = ({navigation}) => {
    const signup = useAuthStore(state => state.signup);

    const handleSignUp = async () => {
        await signup({
            username, 
            email, 
            password, 
            passwordConfirm
        });
        navigation.navigate('Signin');
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='flex-1 bg-obsidian items-center gap-5'>
                <Text className='text-cream text-4xl'>Create your account</Text>

                <AuthTextInput 
                    placeholderText='username' 
                    isPassword={false}
                    value={username}
                    onChangeText={setUsername}
                />
                <AuthTextInput 
                    placeholderText='email' 
                    isPassword={false} 
                    value={email}
                    onChangeText={setEmail}
                />

                <AuthTextInput 
                    placeholderText='password'
                    isPassword={true} 
                    value={password}
                    onChangeText={setPassword}
                />

                <AuthTextInput 
                    placeholderText='confirm password' 
                    isPassword={true} 
                    value={passwordConfirm}
                    onChangeText={setpasswordConfirm}
                />

                <AuthButton text='Sign up' functionToCall={handleSignUp}/>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SignupScreen