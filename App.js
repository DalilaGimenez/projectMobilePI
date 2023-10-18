import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContextProvider from './src/contexts/UserContext';
import MyStack from './src/stacks/MainStack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <UserContextProvider>
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    </UserContextProvider>
  );
}