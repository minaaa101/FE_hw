import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import dummy from "../../db/data.json";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export default function PostViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const contents = dummy.find((data) => data.id === Number(id));
  const [comment, setComment] = useState("");

  const backButton = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Button text="뒤로 가기" onClick={backButton} />
        <PostContainer>
          <TitleText>{contents.title}</TitleText>
          <ContentText>{contents.content}</ContentText>
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={contents.comments} />
        <TextInput
          height="50px"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button text="댓글 작성하기" onClick={backButton} />
      </Container>
    </Wrapper>
  );
}
