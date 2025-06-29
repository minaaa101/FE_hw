import React from "react";
import CommentListItem from "./CommentListItem";
import dummy from "../../db/data.json"
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

export default function CommentList (){
    const {id} = useParams();
    const post = dummy.find((data)=>data.id===Number(id));
    console.log(post);
    
    
    return (
        <StyledUl className="CommentList">
            {post.comments.map((Comment) => (
                <CommentListItem key={Comment.id} Comment={Comment.content}></CommentListItem>
            ))}
        </StyledUl>
    )
}