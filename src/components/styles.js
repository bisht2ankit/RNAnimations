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
        justifyContent: 'center',
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
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    normalDot: {
        height: 5,
        width: 16,
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
        marginLeft: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backIcn: {
        width: 32,
        height: 32,
    },
    detailView: {
        left: 16,
        top: 50,
        position: 'absolute',
        zIndex: 1
    }
})