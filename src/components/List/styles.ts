import styled from "styled-components/native"

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const HeaderList = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 327px;
`

export const HeaderItem = styled.View`
    flex-direction: row;
    align-items: center;
`

export const TextCreate = styled.Text`
    color: ${props => props.theme.COLORS.BLUE};
    font-weight: ${props => props.theme.FONT_FAMILY.INTER_700BOLD};
`
export const TextDone = styled.Text`
    color: ${props => props.theme.COLORS.PURPLE};
    font-weight: ${props => props.theme.FONT_FAMILY.INTER_700BOLD};
`

export const CountContainer = styled.View`
    background-color: ${props => props.theme.COLORS.GRAY_400};
    padding: 4px 8px;
    border-radius: 50px;
    margin-left: 8px;
`

export const Count = styled.Text`
    color: ${props => props.theme.COLORS.GRAY_100};
`