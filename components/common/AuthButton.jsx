import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'

const AuthButton = ({ text, functionToCall, variant = "primary", isLoading = false }) => {
    return (
        <TouchableOpacity
            onPress={functionToCall}
            className='bg-lavender w-10/12 p-3 rounded-full py-4'
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color="#222222" size="small" className='self-center' />
            ) : (
                <Text className='text-obsidian font-bold text-2xl self-center'>{text}</Text>
            )}
        </TouchableOpacity>
    )
}

export default AuthButton