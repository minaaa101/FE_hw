import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const StyledLi = styled.li`
    font-size: 16px;
    white-space: pre-wrap;
`;
export default function CommentListItem ({Comment}) {
    
    return(
        <StyledDiv>
            <StyledLi key={Comment}>{Comment}</StyledLi>

        </StyledDiv>
    );
}