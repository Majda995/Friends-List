import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as Icon from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import FriendScreen from "./screens/FriendScreen";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "aliceblue" },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendScreen"
        component={FriendScreen}
        options={({ route }) => {
          const friend = route.params.friend;
          return {
            headerBackTitle: null,
            headerTitle: `${friend.name.first} ${friend.name.last}`,
          };
        }}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, size, color }) => {
              let icon;
              if (route.name === "Home")
                icon = focused ? "home" : "home-outline";
              else if (route.name === "Settings")
                icon = focused ? "settings" : "settings-outline";
              return <Icon.Ionicons name={icon} size={size} color={color} />;
            },
          };
        }}
        tabBarOptions={{
          activeTintColor: "orange",
          activeBackgroundColor: "aliceblue",
          inactiveBackgroundColor: "aliceblue",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: "Freunde",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Einstellung",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
