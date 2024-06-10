import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ROUTES from "../constants/route";
import ForgotScreen from "../pages/ForgotScreen";
import LoginScreen from "../pages/LoginScreen";
import SigninScreen from './../pages/SigninScreen';
import Drawer from '../Drawer/DrawerScreen';
import Scan from '../screens/Scan';
const Stack = createStackNavigator();

function AuthNavigator () {
    console.log(Stack);
    return(
        <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen}></Stack.Screen>
            <Stack.Screen name={ROUTES.FORGOT} component={ForgotScreen}></Stack.Screen>
            <Stack.Screen name={ROUTES.SIGNIN} component={SigninScreen}></Stack.Screen>
             <Stack.Screen name="Scan" component={Scan} />
            <Stack.Screen name={ROUTES.DRAWER} component={Drawer} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
  };

export default AuthNavigator;
