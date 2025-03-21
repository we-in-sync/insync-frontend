import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'

import AuthTextInput from 'components/common/AuthTextInput'
import AuthButton from 'components/common/AuthButton'
import StepIndicator from 'components/common/StepIndicator'

import useAuthStore from 'store/authStore'

import { Check } from 'react-native-feather';

const ForgotPasswordScreen = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const forgotPassword = useAuthStore(state => state.forgotPassword);
    const isLoading = useAuthStore(state => state.isLoading);
    const resetPassword = useAuthStore(state => state.resetPassword);

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleGetResetToken = async (email) => {
        const result = await forgotPassword(email);

        if (!result.success) {
            Alert.alert("Error", "Failed to generate token. Make sure e-mail is valid");
            return;
        }

        setCurrentStep(2);
    };

    const handleResetPassword = async (token, password, passwordConfirm) => {
        const response = await resetPassword(token, password, passwordConfirm)

        if (!response.success) {
            Alert.alert("Error", "Failed to reset password")
            return
        }

        Alert.alert(
            "Success", 
            "Your password has been reset successfully!", 
            [{text: "OK", onPress: () => {setCurrentStep(3)}}]
        )
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='flex-1 bg-obsidian gap-12'>
                <View className='items-center px-8 mt-10'>
                    <View className='h-40 justify-center'>
                        <Text className='color-cream text-3xl font-bold text-center'>
                            {currentStep === 1 && "Enter the e-mail address associated with your account and we'll send you a password reset token."}
                            {currentStep === 2 && "Enter the token sent to your email and set your new password."}
                            {currentStep === 3 && "Create a new password."}
                        </Text>
                    </View>

                    <View className='w-full mt-5'>
                        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
                    </View>
                </View>

                <View className='flex-1 items-center gap-12'>
                    {currentStep === 1 && (
                        <>
                            <AuthTextInput placeholderText='Enter your e-mail' value={email} onChangeText={setEmail}/>
                            <AuthButton
                                text='Get reset token on e-mail'
                                isLoading={isLoading}
                                functionToCall={
                                    async () => {
                                        await handleGetResetToken(email);
                                    }
                                }
                            />
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <AuthTextInput placeholderText='Enter token from email' value={token} onChangeText={setToken}/>
                            <AuthTextInput placeholderText='Enter new password' value={password} onChangeText={setPassword}/>
                            <AuthTextInput placeholderText='Confirm new password' value={passwordConfirm} onChangeText={setPasswordConfirm}/>
                            <AuthButton
                                text='Reset Password'
                                functionToCall={
                                    async () => {
                                        await handleResetPassword(token, password, passwordConfirm);
                                    }
                                }
                            />
                            <AuthButton
                                text='Back'
                                variant="secondary"
                                functionToCall={() => setCurrentStep(1)}
                            />
                        </>
                    )}

                    {currentStep === 3 && (
                        <View className="w-full items-center gap-6">
                            <View className="w-20 h-20 bg-green-500 rounded-full items-center justify-center mb-2">
                                <Check width={40} height={40} color="#fff" />
                            </View>

                            <Text className="color-cream text-2xl font-bold text-center">
                                Password Reset Successful!
                            </Text>

                            <Text className="color-cream text-center opacity-80 px-4 mb-2">
                                Your password has been updated. Please use your new password to log in to your account.
                            </Text>

                            <AuthButton
                                text='Go to Login'
                                functionToCall={() => {
                                    navigation.popToTop();
                                }}
                            />
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default ForgotPasswordScreen