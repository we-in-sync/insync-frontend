import { TextInput } from "react-native"

const AuthTextInput = ({placeholderText, isPassword = false}) => {
    return (
        <TextInput
            style={{
                color: '#FFF6EE',
                height: 55, 
                lineHeight: 24, 
                textAlignVertical: 'center' 
            }}
            className="bg-transparent text-cream text-xl w-10/12 border border-cream rounded-2xl p-4 px-5"
            placeholder={placeholderText}
            selectionColor="#FFF6EE"
            placeholderTextColor="grey"
            autoCapitalize={'none'}
            secureTextEntry={isPassword}
            keyboardAppearance="dark" 
        />
    )
}

export default AuthTextInput