import {Check, Circle, Trash} from "phosphor-react-native";
import styled, {css} from "styled-components/native";

interface ContentProps {
    isSelected?: boolean;
}


export const Container = styled.View`
    width: 327px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    background-color: ${props => props.theme.COLORS.GRAY_500};
    margin-top: 8px;
    border-radius: 4px;
`

export const TouchableCheck = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border: 1px solid ${props => props.theme.COLORS.PURPLE_DARK};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.COLORS.PURPLE_DARK};
`

export const TouchableRadioChecked = styled.TouchableOpacity<ContentProps>`
    width: 20px;
    height: 20px;
    ${props => props.isSelected && css`
        border: 1px solid ${props => props.theme.COLORS.PURPLE_DARK};
        border-radius: 50px;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.COLORS.PURPLE_DARK};
    `}
`

export const Content = styled.Text<ContentProps>`
    color: ${props => props.theme.COLORS.GRAY_100};
    width: 235px;
    margin: 0 8px;
    ${props => props.isSelected && css`
        text-decoration-line: line-through;
    `}
`

export const IconCircle = styled(Circle)`
    color: ${props => props.theme.COLORS.BLUE};
`

export const IconTrash = styled(Trash)`
    color: ${props => props.theme.COLORS.GRAY_300};
`

export const IconCheck = styled(Check)`
    color: ${props => props.theme.COLORS.GRAY_100};
`
export const TouchableTrash = styled.TouchableOpacity``