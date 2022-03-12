import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Home from "../Screens/Home";
import Setting from "../Screens/Setting";
import Info from "../Screens/Info";
import Search from "../Screens/Search";
// import { FontAwesome } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Home />
    // <Tab.Navigator
    //   tabBarOptions={{
    //     showLabel: false,
    //     style: {
    //       position: "absolute",
    //       bottom: 25,
    //       left: 20,
    //       right: 20,
    //       elevation: 0,
    //       backgroundColor: "#ffffff",
    //       borderRadius: 15,
    //       height: 90,
    //       ...styles.shadow,
    //     },
        
    //   }}
    //   screenOptions={{ headerShown: false }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarIcon: ({ focused }) => (
    //         <View>
    //           {/* <FontAwesome name="home" size={24} color="black" resizeMode ="contain" 
    //       style={{

    //        width:25,
    //        height:25,
           
           
    //       }} /> */}
    //           <Text>Home</Text>
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tab.Screen name="Settings" component={Setting} />
    //   <Tab.Screen name="Info" component={Info} />
    //   <Tab.Screen name="Search" component={Search} />
    // </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  shadow: {
    textShadowColor: "#7F5DF0",
    textShadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
 
});

export default Tabs;
