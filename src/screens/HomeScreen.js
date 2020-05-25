import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";
import { SliderImages } from "../components/SliderImages";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SliderImages/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.THEME_APP_COLOR
    }
});