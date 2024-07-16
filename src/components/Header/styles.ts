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
        fontWeight: "bold",
    },
    do: {
        color: colors.purple,
        fontWeight: "bold",
    },
})