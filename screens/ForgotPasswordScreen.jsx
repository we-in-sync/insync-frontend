import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'

const ForgotPasswordScreen = () => {
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView className='flex-1 bg-obsidian items-center gap-12'>
                <Text className='color-cream text-3xl font-bold text-center px-8 mt-10'>
                    Enter your email address below and we'll send you a password reset token.
                </Text>
                <AuthTextInput placeholderText='Enter your e-mail'/>
                <AuthButton text='Get reset token on e-mail' functionToCall={() => {}}/>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default ForgotPasswordScreen