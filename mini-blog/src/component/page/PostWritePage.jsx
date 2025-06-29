import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledContainer = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

export default function PostWritePage (){
    const navigate=useNavigate();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    const WriteButton = () =>{
        navigate("/")
    }

    return (
        <StyledDiv>
            <StyledContainer>
                <h2>미니 블로그</h2>
                <TextInput height= {50}value={title} onChange = {(t) => {setTitle(t.target.value);}} ></TextInput>
                <br/>
                <TextInput style={{ height: "800px" }} value={content} onChange = {(c) => {setContent(c.target.value);}} ></TextInput>
                <br/>
                <Button text="글 작성하기" onClick={WriteButton} />
            </StyledContainer>
        </StyledDiv>
    );
}