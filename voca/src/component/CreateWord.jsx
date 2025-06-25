import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: 0 none;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
  `;

const StyledInput = styled.div`
  margin-bottom: 10px;
  `; 

const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  `;
const StyledInputInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
  `;

const StyledInputSelect = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
  `; 

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);
      
      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;
        
      fetch(`http://localhost:3001/words`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);


  return (
    <form onSubmit={onSubmit}>
        <StyledInput>
            <StyledInputLabel>Eng</StyledInputLabel>
            <StyledInputInput type="text" placeholder="computer" ref={engRef} />
        </StyledInput>
        <StyledInput>
            <StyledInputLabel>Kor</StyledInputLabel>
            <StyledInputInput type="text" placeholder="컴퓨터" ref={korRef} />
        </StyledInput>
        <StyledInput>
            <StyledInputLabel>Day</StyledInputLabel>
            <StyledInputSelect ref={dayRef}>
                {days.map(day => (
                <option key={day.id} value={day.day}>
                    {day.day}
                </option>
                ))}
            </StyledInputSelect>
        </StyledInput>
      <StyledButton style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? "Saving..." : "저장"}
      </StyledButton>
    </form>
  );
}
