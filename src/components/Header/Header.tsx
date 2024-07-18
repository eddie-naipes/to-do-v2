import {Container, ContainerLogo, ContentLogo, Do, To} from "./styles";
import {Timer} from "phosphor-react-native";
import {useTheme} from "styled-components"

export const Header = () => {

    const theme = useTheme();

    return (
        <Container>
            <ContainerLogo>
                <Timer
                    color={theme.COLORS.GRAY_100}
                    size={28}
                />
                <ContentLogo>
                    <To>to</To>
                    <Do>do</Do>
                </ContentLogo>
            </ContainerLogo>
        </Container>
    );
};