import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthButton from 'components/common/AuthButton'

const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView className='flex-1 bg-obsidian justify-center items-center gap-10'>
            <Text className='text-cream text-3xl underline'>A logo will be here</Text>
            
            <View className='items-center'>
                <Text className='text-cream text-3xl'>Connect with millions</Text>
                <Text className='text-cream text-3xl'>of other music enthusiasts</Text>
            </View>

            <AuthButton text='Sign up for free' functionToCall={() => {navigation.navigate('Signup')}}/>

            <TouchableOpacity onPress={() => {navigation.navigate('Signin')}}>
                <Text className='text-lavender text-xl'>
                    Sign in
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default WelcomeScreen