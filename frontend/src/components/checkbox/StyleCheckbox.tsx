import styled from "styled-components";
import { StyledCheckboxProps } from "../../features/register/utils/GlobalInterfaces";

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
    margin: 0;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.active ? props.theme.colors.blue : "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => props.active ? "none" : `solid 2px ${props.theme.colors.darkGray}`};
    cursor: pointer;

`

export const StyledCheckboxBackground = styled.div<StyledCheckboxProps>`
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    border-radius: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.active ? "rgba(29, 161, 242, .15)" : "rgba(0,0,0,.07)"};
    }
`