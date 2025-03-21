import { View, Text, TouchableWithoutFeedback, SafeAreaView, Keyboard } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'

import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'

import useAuthStore from 'store/authStore'

const SignupScreen = ({navigation}) => {
    const signup = useAuthStore(state => state.signup)
    const isLoading = useAuthStore(state => state.isLoading)

    const handleSignUp = async () => {
        if (!username || !email || !password || !passwordConfirm) {
            Alert.alert(
                "Missing Information",
                "Please fill in all fields to create your account."
            );
            return
        }

        if (password !== passwordConfirm) {
            Alert.alert(
                "Password Mismatch",
                "The passwords you entered don't match. Please try again."
            );
            return
        }

        const response = await signup({
            username, 
            email, 
            password, 
            passwordConfirm
        });
        
        if (!response.success) {
            Alert.alert("Error", "Failed to sign up, please try again")
            return
        } 

        Alert.alert(
            "Account Created Successfully!",
            "Welcome to inSync. You can now sign in with your credentials.",
            [
                {
                    text: "Sign In Now",
                    onPress: () => navigation.navigate('Signin')
                }
            ]
        );
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

                <AuthButton text='Sign up' functionToCall={handleSignUp} isLoading={isLoading}/>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SignupScreen