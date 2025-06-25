import { useState } from "react";
import styled from "styled-components";

const StyledTr = styled.tr`
  ${({ isDone }) =>
    isDone &&
    `
    background: #eee;
    color: #ccc;
  `}
`;

const StyledTd = styled.td`
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;

  &:first-child {
    width: 10%;
  }
`;

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
`;

const StyledButtonDel = styled(StyledButton)`
  background-color: firebrick;
  margin-left: 10px;
`;

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(w.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...word, isDone: !isDone }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ ...word, id: 0 });
        }
      });
    }
  }

  if (word.id === 0) return null;

  return (
    <StyledTr isDone={isDone}>
      <StyledTd>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </StyledTd>
      <StyledTd>{word.eng}</StyledTd>
      <StyledTd>{isShow && word.kor}</StyledTd>
      <StyledTd>
        <StyledButton onClick={toggleShow}>
          뜻 {isShow ? "숨기기" : "보기"}
        </StyledButton>
        <StyledButtonDel onClick={del}>삭제</StyledButtonDel>
      </StyledTd>
    </StyledTr>
  );
}
