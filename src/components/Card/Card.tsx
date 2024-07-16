import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {useState} from "react";
import {Check, Circle, Trash} from "phosphor-react-native";
import {colors} from "../../../global";
import {TaskDTO} from "../../shared/interfaces/TaskDTO";


interface CardProps {
    task: TaskDTO;
    handleRemoveTask: (id: number) => void;
    handleDoneTask: (id: number) => void;
}


export const Card = ({handleRemoveTask, handleDoneTask, task}: CardProps) => {

    const [isSelected, setSelection] = useState(false);

    const handleRadioPress = () => {
        handleDoneTask(task.id);
        setSelection(!isSelected);
    };

    return (
        <View style={styles.container}>
            {isSelected ?
                <TouchableOpacity
                    style={styles.checkContainer}
                    onPress={handleRadioPress}
                >
                    <Check
                        color={colors.gray100}
                        size={16}
                    />
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.containerCircle}
                    onPress={handleRadioPress}
                >
                    <Circle
                        color={colors.blue}
                        size={20}
                    />
                </TouchableOpacity>
            }
            <Text
                style={
                    [styles.content, isSelected && styles.isSelectedText]
                }
            >
                {task.title}
            </Text>
            <TouchableOpacity
                onPress={() => handleRemoveTask(task.id)}
            >
                <Trash
                    size={16}
                    color={colors.gray300}
                />
            </TouchableOpacity>
        </View>
    );
};