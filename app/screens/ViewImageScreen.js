import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash" color="white" size={30} />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },

  deleteIcon: {
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

