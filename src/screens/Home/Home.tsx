import {Alert} from "react-native";
import {ContainerInput, ContentInput, TouchAdd} from "./styles";
import {PlusCircle} from "phosphor-react-native";
import {TaskDTO} from "@interfaces/TaskDTO";
import {useState} from "react";
import {Header} from "@components/Header/Header";
import {List} from "@components/List/List"
import {useTheme} from "styled-components/native";

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

    const theme = useTheme();


    return (
        <>
            <Header/>
            <ContainerInput>
                <ContentInput
                    placeholder={"What needs to be done?"}
                    placeholderTextColor={theme.COLORS.GRAY_300}
                    onChangeText={setTitle}
                    value={title}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    focused={focused}
                />
                <TouchAdd
                    onPress={createTask}
                >
                    <PlusCircle
                        color={theme.COLORS.GRAY_100}
                    />
                </TouchAdd>
            </ContainerInput>
            <List
                tasks={tasks}
                handleRemoveTask={handleRemoveTask}
                handleDoneTask={handleDoneTask}
            />
        </>

    );
};