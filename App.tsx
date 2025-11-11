import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Shield, Users, BookOpen, FileText, Info } from 'lucide-react-native';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DenunciaScreen from './src/screens/DenunciaScreen';
import RedeScreen from './src/screens/RedeScreen';
import DireitosScreen from './src/screens/DireitosScreen';
import BOScreen from './src/screens/BOScreen';
import SobreScreen from './src/screens/SobreScreen';

export type RootTabParamList = {
  Início: undefined;
  Denúncia: undefined;
  Rede: undefined;
  Direitos: undefined;
  'B.O.': undefined;
  Sobre: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  const primaryColor = '#8B1B42';
  const inactiveColor = '#737373';
  const backgroundColor = '#FFF9FB';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor: backgroundColor,
          borderTopColor: '#E5E5E5',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Denúncia"
        component={DenunciaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Shield color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rede"
        component={RedeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Users color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Direitos"
        component={DireitosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BookOpen color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="B.O."
        component={BOScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={SobreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Info color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
