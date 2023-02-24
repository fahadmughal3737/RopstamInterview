import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashBoard, Login, SignUp} from '../screens';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRoute={'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashBoard"
        component={DashBoard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
