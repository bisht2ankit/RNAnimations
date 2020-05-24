import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { constants } from "../constants/strings";
import { Header } from "../components/Header";
import globalStyles from '../constants/globalStyles';
import { colors } from "../constants/colors";
import { SliderImages } from "../components/SliderImages";

export default function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={globalStyles.paddingContainer}>
                <Header title={constants.navigationTitle.sportsShop} />
            </View>
            <SliderImages />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.THEME_APP_COLOR
    }
});