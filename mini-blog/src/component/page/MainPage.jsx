import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
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

export default function MainPage (){
    const navigate=useNavigate();

    const handleButton = () =>{
        navigate("/write")
    }

    return (
        <StyledDiv>
            <StyledContainer>
                <h2>미니 블로그</h2>
                <Button text="글 작성하기" onClick={handleButton} />
                <PostList></PostList>
            </StyledContainer>
        </StyledDiv>
    );
}