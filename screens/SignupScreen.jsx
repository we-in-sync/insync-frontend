import { View, Text, TouchableWithoutFeedback, SafeAreaView, Keyboard } from 'react-native'
import React from 'react'

import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'

const SignupScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='flex-1 bg-obsidian items-center gap-5'>
                <Text className='text-cream text-4xl'>Create your account</Text>

                <AuthTextInput placeholderText='username' isPassword={false}/>
                <AuthTextInput placeholderText='email' isPassword={false} />
                <AuthTextInput placeholderText='password' isPassword={true} />
                <AuthTextInput placeholderText='confirm password' isPassword={true} />

                <Text className='text-cream text-2xl'>Link your Spotify account</Text>

                <AuthButton text='Sign up'/>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SignupScreen