import {    View, 
            Text, 
            SafeAreaView, 
            TouchableOpacity, 
            TouchableWithoutFeedback,
            Keyboard, 
            Alert
        } from 'react-native'
import { useState } from 'react'
import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'

import useAuthStore from 'store/authStore'

const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = useAuthStore(state => state.login)
    const isLoading = useAuthStore(state => state.isLoading)

    const handleLogin = async () => {
        const response = await login({ email, password });

        if (!response.success) {
            Alert.alert("Error", "Invalid credentials, please try again")
            return 
        }

        // to-do redirect
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='flex-1 bg-obsidian items-center gap-12'>
                {/** will be a logo here as well */}

                <View>
                    <Text className='text-cream text-4xl font-bold'>Welcome back</Text>
                    <Text className='text-cream text-2xl ml-3 font-bold'>Let's get you inSync</Text>
                </View>

                <View className='w-full items-center gap-4 justify-center'>
                    <AuthTextInput 
                        placeholderText='username or e-mail'
                        value={email}
                        onChangeText={setEmail}
                    />

                    <AuthTextInput 
                        placeholderText='password' isPassword={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity onPress={() => {navigation.navigate('ForgotPassword')}}>
                    <Text className='text-lavender text-xl'>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                <AuthButton text='Sign in' functionToCall={handleLogin} isLoading={isLoading}/>
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SigninScreen