import styled from "styled-components/native"

export const Container = styled.View`
    width: 327px;
    height: 208px;
    align-items: center;
    justify-content: center;
`

export const Content = styled.Text`
    color: ${props => props.theme.COLORS.GRAY_300};
    margin-top: 16px;
    width: 287px;
    height: 40px;
    text-align: center;
`
