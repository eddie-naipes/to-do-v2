import {styles} from "./styles";
import {Text, View} from "react-native";
import {Timer} from "phosphor-react-native";
import {colors} from "../../../global";

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Timer
                    color={colors.blue}
                    size={28}
                />
                <Text style={styles.contentLogo}>
                    <Text style={styles.to}>to</Text>
                    <Text style={styles.do}>do</Text>
                </Text>
            </View>
        </View>
    );
};