import React from "react";
import { ImageBackground, View, StyleSheet, Button, Text, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ title, onPress }) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" />
                <AppButton title="register" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 100,
        height: 100,
    },

    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    },

    buttonContainer: {
        width: "100%",
        padding: 20,
    }
});

export default WelcomeScreen;