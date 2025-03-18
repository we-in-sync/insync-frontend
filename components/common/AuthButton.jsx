import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AuthButton = ({text, functionToCall}) => {
    return (
        <TouchableOpacity onPress={functionToCall} className='bg-lavender w-10/12 p-3 rounded-full py-4'>
            <Text className='text-obsidian font-bold text-2xl self-center'>{text}</Text>
        </TouchableOpacity>
    )
}

export default AuthButton