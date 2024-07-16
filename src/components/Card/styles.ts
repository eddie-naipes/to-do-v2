import {StyleSheet} from "react-native";
import {colors} from "../../../global";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        padding: 16,
        backgroundColor: colors.gray500,
        marginTop: 8,
        borderRadius: 4
    },
    content: {
        color: colors.gray100,
        width: 235,
        marginRight: 8,
        marginLeft: 8
    },
    checkContainer: {
        width: 20,
        height: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.purpleDark,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.purpleDark
    },
    containerCircle: {
        width: 20,
        height: 20,
    },
    isSelectedText: {
        textDecorationLine: "line-through",
        color: colors.gray300
    }


})