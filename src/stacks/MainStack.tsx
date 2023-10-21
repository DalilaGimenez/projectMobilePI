import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreLoad from '../screens/PreLoad';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Services from '../screens/Services';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="PreLoad"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="PreLoad" component={PreLoad} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Services" component={Services} />
    </Stack.Navigator>
);