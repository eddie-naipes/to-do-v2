import {FlatList} from "react-native";
import {Container, Count, CountContainer, HeaderItem, HeaderList, TextCreate, TextDone} from "./styles"
import {Card} from "@components/Card/Card";
import {EmptyList} from "@components/EmptyList/EmptyList";
import {ListDTO} from "@interfaces/ListDTO";


export const List = ({tasks, handleRemoveTask, handleDoneTask}: ListDTO) => {
    return (
        <Container>
            <HeaderList>
                <HeaderItem>
                    <TextCreate>Create</TextCreate>
                    <CountContainer>
                        <Count>{tasks.length}</Count>
                    </CountContainer>
                </HeaderItem>
                <HeaderItem>
                    <TextDone>Done</TextDone>
                    <CountContainer>
                        <Count>{tasks.filter(task => task.isCompleted).length}</Count>
                    </CountContainer>
                </HeaderItem>
            </HeaderList>
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
        </Container>
    );
};