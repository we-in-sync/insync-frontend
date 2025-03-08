import {    View, 
            Text, 
            SafeAreaView, 
            TextInput, 
            TouchableOpacity, 
            TouchableWithoutFeedback,
            Keyboard,
        } from 'react-native'
import React from 'react'
import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'

const SigninScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='flex-1 bg-obsidian items-center gap-12'>
                {/** will be a logo here as well */}

                <View>
                    <Text className='text-cream text-4xl'>Welcome back</Text>
                    <Text className='text-cream text-2xl ml-3'>Let's get you inSync</Text>
                </View>

                <View className='w-full items-center gap-4 justify-center'>
                    <AuthTextInput placeholderText='username or e-mail'/>
                    <AuthTextInput placeholderText='password' isPassword={true}/>
                </View>

                <TouchableOpacity>
                    <Text className='text-lavender text-xl'>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                <AuthButton text='Sign in'/>

                <TouchableOpacity>
                    <Text className='text-lavender text-xl'>
                        Don't have an account?
                    </Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SigninScreen