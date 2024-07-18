import styled from 'styled-components/native';


export const To = styled.Text`
    color: ${props => props.theme.COLORS.BLUE};
    font-family: ${props => props.theme.FONT_FAMILY.INTER_700BOLD};
`
export const Do = styled.Text`
    color: ${props => props.theme.COLORS.PURPLE};
    font-family: ${props => props.theme.FONT_FAMILY.INTER_700BOLD};
`

export const ContentLogo = styled.Text`
    margin-left: 8px;
    font-size: ${props => props.theme.FONT_SIZE.LG};
`;

export const ContainerLogo = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Container = styled.View`
    width: 100%;
    height: 173px;
    background-color: ${props => props.theme.COLORS.GRAY_700};
    align-items: center;
    justify-content: center;
`