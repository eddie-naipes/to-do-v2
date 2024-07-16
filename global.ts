import {StyleSheet} from "react-native";

export const colors = {
    blueDark: "#1E6F9F",
    blue: "#4EA8DE",
    purpleDark: "#5E60CE",
    purple: "#8284FA",
    gray100: "#F2F2F2",
    gray200: "#D9D9D9",
    gray300: "#808080",
    gray400: "#333333",
    gray500: "#262626",
    gray600: "#1A1A1A",
    gray700: "#0D0D0D",
    danger: "#E25858"
}

export const fonts = {
    size12: 12,
    size14: 14,
    size16: 16,
    regular: 'Inter_400Regular',
    bold: 'Inter_700Bold',
}

export const styles = StyleSheet.create({
    container: {
        fontFamily: fonts.regular,
        backgroundColor: colors.gray600,
        flex: 1,
    }
})