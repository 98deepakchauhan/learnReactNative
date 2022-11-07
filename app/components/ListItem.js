import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, SubTitle, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{SubTitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "900"
    },
    subTitle: {
        color: colors.medium
    }

})
export default ListItem;