import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
        <MaterialCommunityIcons>hi there</MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}></View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
});
export default ViewImageScreen;

