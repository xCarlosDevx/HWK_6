import React from "react";
import Home from "./src/pages/Home";
import Gender from "./src/pages/Gender";
import Age from "./src/pages/Age";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Country from "./src/pages/Country";
import Weather from "./src/pages/Weather";
import AboutMe from "./src/pages/AboutMe";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Gender" component={Gender} />
        <Drawer.Screen name="Age" component={Age} />
        <Drawer.Screen name="Country" component={Country} />
        <Drawer.Screen name="Weather" component={Weather} />
        <Drawer.Screen name="AboutMe" component={AboutMe} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
