import { View, Text, TouchableWithoutFeedback, SafeAreaView, Keyboard } from 'react-native'
import React from 'react'

const SignupScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='flex-1 bg-obsidian items-center'>
                <Text>SIGNUP</Text>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SignupScreen