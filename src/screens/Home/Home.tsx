import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {PlusCircle, Timer} from "phosphor-react-native";
import {colors} from "../../../global";
import {TaskDTO} from "../../shared/interfaces/TaskDTO";
import {useState} from "react";

interface HeaderProps {
    handleAddTask: (newTask: TaskDTO) => void;
    tasks: TaskDTO[];
}

export const Home = ({handleAddTask, tasks}: HeaderProps) => {

    const [title, setTitle] = useState<string>("");
    const [focused, setFocused] = useState<boolean>(false);

    const validateTask = () => {
        const checkTask = tasks.some(task => task.title.toUpperCase().trim() === title.toUpperCase().trim());
        return title.trim().toUpperCase() !== "" && !checkTask;
    }

    const createTask = () => {
        if (!validateTask()) {
            return Alert.alert("Task already exists or is empty");
        }
        handleAddTask({
            id: tasks.length + 1,
            title,
            isCompleted: false
        });
        setTitle("");
    }


    return (
        <>
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
            <View style={styles.containerInput}>
                <TextInput
                    style={[styles.input, focused && styles.containerInputFocus]}
                    placeholder={"What needs to be done?"}
                    placeholderTextColor={colors.gray300}
                    onChangeText={setTitle}
                    value={title}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={createTask}
                >
                    <PlusCircle
                        color={colors.gray100}
                    />
                </TouchableOpacity>
            </View>

        </>

    );
};