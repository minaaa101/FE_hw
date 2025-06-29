import dummy from "../../db/data.json"
import PostListItem from "./PostListItem";
import styled from "styled-components";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
     & > *:not(:last-child) {
    margin-bottom: 16px;
    }
`;

export default function PostList() {
    return (
        <StyledUl className="PostList">
            {dummy.map((data) => (
                <PostListItem key={data.id} id={data.id} title={data.title}></PostListItem>
            ))}
        </StyledUl>
    );
}