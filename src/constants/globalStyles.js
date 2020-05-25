import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    spaceBetweenRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paddingContainer: {
        paddingHorizontal: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0.5
        },
        shadowRadius: 2,
        shadowOpacity: 0.4
    }
})