import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {PlusCircle} from "phosphor-react-native";
import {colors} from "../../../global";
import {TaskDTO} from "../../shared/interfaces/TaskDTO";
import {useState} from "react";
import {Card} from "../../components/Card/Card";
import {Header} from "../../components/Header/Header";
import {EmptyList} from "../../components/EmptyList/EmptyList";

interface HeaderProps {
    handleAddTask: (newTask: TaskDTO) => void;
    handleRemoveTask: (id: number) => void;
    handleDoneTask: (id: number) => void;
    tasks: TaskDTO[];
}

export const Home = ({handleAddTask, tasks, handleRemoveTask, handleDoneTask}: HeaderProps) => {

    const [title, setTitle] = useState<string>("");
    const [focused, setFocused] = useState<boolean>(false);

    const validateTask = () => {
        const checkTask = tasks.some(task => task.title.toUpperCase().trim() === title.toUpperCase().trim());
        return title.trim().toUpperCase() !== "" && !checkTask && title.length < 150;
    }

    const createTask = () => {
        if (!validateTask()) {
            return Alert.alert("Invalid task", "Please, check if the task is empty, already exists or has more than 150 characters.");
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
            <Header/>
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
            <View style={styles.containerList}>
                <View style={styles.headerList}>
                    <View style={styles.headerItem}>
                        <Text style={styles.headerCreate}>Create</Text>
                        <View style={styles.countContainer}>
                            <Text style={styles.count}>{tasks.length}</Text>
                        </View>
                    </View>
                    <View style={styles.headerItem}>
                        <Text style={styles.headerDone}>Done</Text>
                        <View style={styles.countContainer}>
                            <Text style={styles.count}>{tasks.filter(task => task.isCompleted).length}</Text>
                        </View>
                    </View>

                </View>
                <FlatList
                    keyExtractor={task => String(task.id)}
                    data={tasks}
                    renderItem={task => {
                        return (
                            <Card
                                task={task.item}
                                handleRemoveTask={handleRemoveTask}
                                handleDoneTask={handleDoneTask}
                            />
                        )
                    }}
                    ListEmptyComponent={EmptyList}
                />
            </View>
        </>

    );
};