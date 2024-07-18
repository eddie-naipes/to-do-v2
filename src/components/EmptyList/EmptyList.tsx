import {ClipboardText} from "phosphor-react-native";
import {Container, Content} from "./styles";
import {useTheme} from "styled-components"

export const EmptyList = () => {
    const theme = useTheme();

    return (
        <Container>
            <ClipboardText
                size={56}
                color={theme.COLORS.GRAY_300}
            />
            <Content>
                You don't have tasks registered yet
                Create tasks and organize your to-do items
            </Content>
        </Container>
    );
};