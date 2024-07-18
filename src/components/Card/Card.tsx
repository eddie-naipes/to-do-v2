import {Container, Content, IconCheck, IconCircle, IconTrash, TouchableRadioChecked, TouchableTrash} from "./styles";
import {useState} from "react";
import {TaskDTO} from "@interfaces/TaskDTO";


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
        <Container>

            <TouchableRadioChecked
                    onPress={handleRadioPress}
                    isSelected={isSelected}
                >
                {isSelected ? <IconCheck size={16}/> : <IconCircle size={20}/>}
            </TouchableRadioChecked>
            <Content
                isSelected={isSelected}
            >
                {task.title}
            </Content>

            <TouchableTrash
                onPress={() => handleRemoveTask(task.id)}
            >
                <IconTrash
                    size={16}
                />
            </TouchableTrash>
        </Container>
    );
};