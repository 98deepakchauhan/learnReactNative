import React from "react";
import { Text, StyleSheet, Platform } from "react-native";


function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>
}



const styles = StyleSheet.create({
  text: {
    // fontFamily: 18,
    // fontFamily: Platform.OS === "android" ? "roboto" : "avenir",
    ...Platform.select({
      ios: {
        fontSize: 20,
        foontFamily: "avenir"
      },
      android: {
        fontSize: 18,
        fontFamily: "roboto"
      }
    })
  },
})

export default AppText;