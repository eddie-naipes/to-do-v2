import {Text, View} from "react-native";
import {ClipboardText} from "phosphor-react-native";
import {colors} from "../../../global";
import {styles} from "./styles";

export const EmptyList = () => {
    return (
        <View style={styles.emptyList}>
            <ClipboardText
                size={56}
                color={colors.gray300}
            />
            <Text style={styles.emptyText}>You don't have tasks registered yet
                Create tasks and organize your to-do items</Text>
        </View>
    );
};