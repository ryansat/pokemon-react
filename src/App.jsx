import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./pages/Home";
import Compare from "./pages/Compare";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Compare") {
              iconName = focused
                ? "ios-git-compare"
                : "ios-git-compare-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false, // This hides the header for each tab screen if undesired
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
        <Tab.Screen
          name="Compare"
          component={Compare}
          options={{ title: "Compare Pokémon" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
