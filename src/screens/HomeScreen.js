import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { constants } from "../constants/strings";
import { Header } from "../components/Header";
import globalStyles from '../constants/globalStyles';
import { colors } from "../constants/colors";
import { SliderImages } from "../components/SliderImages";

export default function HomeScreen() {
    const [itemDetailVisible, setItemDetailVisible] = useState(false);

    const itemDetailVisibleCallback = (visible) => {
        setItemDetailVisible(visible);
    }

    return (
        <View style={styles.container}>
            {/* {
                !itemDetailVisible
                &&
                <View style={globalStyles.paddingContainer}>
                    <Header title={constants.navigationTitle.sportsShop} />
                </View>
            } */}
            <SliderImages setItemDetailVisible={itemDetailVisibleCallback} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.THEME_APP_COLOR
    }
});