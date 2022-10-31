import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Formulario from "./Form";
import Home from "./Home";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Formulario') {
                        iconName = focused ? 'ios-list' : 'ios-list';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >
            <Tab.Screen name="Formulario" component={Formulario} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
}