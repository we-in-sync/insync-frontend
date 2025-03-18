import SigninScreen from 'screens/SigninScreen';
import SignupScreen from 'screens/SignupScreen';
import WelcomeScreen from 'screens/WelcomeScreen';

import './global.css';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = createStackNavigator();

const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Welcome'component={WelcomeScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name='Signin' component={SigninScreen} options={{headerShown: false}} />
      <AuthStack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}} />
    </AuthStack.Navigator>
  );
}


export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthStackComponent />
      </NavigationContainer>
    </>
  );
}