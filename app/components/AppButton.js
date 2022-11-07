import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";


function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
    },
    text: {
        color: "white",
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold"

    }
})

export default AppButton;