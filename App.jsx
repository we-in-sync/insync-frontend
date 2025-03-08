import SigninScreen from 'screens/SigninScreen';
import SignupScreen from 'screens/SignupScreen';

import './global.css';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SignupScreen />

    </>
  );
}
