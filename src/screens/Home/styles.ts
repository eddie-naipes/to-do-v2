import {StyleSheet} from "react-native";
import {colors} from "../../../global";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 173,
        backgroundColor: colors.gray700,
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo: {
        flexDirection: "row",
        alignItems: "center",
    },
    contentLogo: {
        fontSize: 32,
        marginLeft: 8
    },
    to: {
        color: colors.blue,
        fontFamily: "Inter_700Bold",
    },
    do: {
        color: colors.purple,
        fontFamily: "Inter_700Bold",
    },
    input: {
        backgroundColor: colors.gray500,
        width: 271,
        height: 54,
        padding: 16,
        borderRadius: 4,
        marginRight: 8,
        color: colors.gray100
    },
    containerInput: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -40
    },
    button: {
        width: 52,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blueDark,
        borderRadius: 4,
    },
    containerInputFocus: {
        borderColor: colors.purpleDark,
        borderStyle: "solid",
        borderWidth: 1
    }


})