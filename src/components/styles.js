import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/colors';
import { fontSize } from '../constants/fontSize';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    headerTxt: {
        color: colors.THEME_TEXT_COLOR,
        fontSize: fontSize.header,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    bag: {
        width: 30,
        height: 30
    },
    card: {
        width: 180,
        height: 270,
        backgroundColor: colors.APP_SLIDER_BACKGROUND,
        borderRadius: 10,
        justifyContent: 'center',
        marginRight: 16
    },
    image: {
        width: 200,
        height: 200
    },
    listContainer: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: colors.THEME_TEXT_COLOR,
        fontSize: fontSize.bigTitle,
        fontWeight: 'bold',
        marginTop: 20
    },
    subtitle: {
        color: colors.APP_SUBTITLE_COLOR,
        fontSize: fontSize.subtitle,
    },
    sliderContainer: {
        marginTop: 50,
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: colors.APP_SLIDER_BACKGROUND,
        marginHorizontal: 4
    },
    fadingContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: "powderblue"
    },
    fadingText: {
      fontSize: 28,
      textAlign: "center",
      margin: 10
    },
    listColumnStyle: {
        justifyContent: 'space-between',
        marginLeft: 16
    }
})