import styled from "styled-components/native"
import {css} from "styled-components";

interface InputProps {
    focused: boolean;
}


export const ContainerInput = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: -35px;
`

export const TouchAdd = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.COLORS.BLUE_DARK};
    border-radius: 4px;
`

export const ContentInput = styled.TextInput<InputProps>`
    width: 271px;
    height: 54px;
    padding: 16px;
    background-color: ${props => props.theme.COLORS.GRAY_500};
    border-radius: 4px;
    color: ${props => props.theme.COLORS.GRAY_100};
    margin-right: 8px;
  ${props =>
    props.focused &&
    css`
      border: 1px solid ${props => props.theme.COLORS.PURPLE_DARK};
    `}
`

export const ContentInputFocused = styled.TextInput`
    width: 271px;
    height: 54px;
    padding: 16px;
    background-color: ${props => props.theme.COLORS.GRAY_500};
    border-radius: 4px;
    color: ${props => props.theme.COLORS.GRAY_100};
    margin-right: 8px;
    border: 1px solid ${props => props.theme.COLORS.PURPLE_DARK};
`