import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  flex: 20% 0 0;
  box-sizing: border-box;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 20px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: dodgerblue;
   text-decoration: none;
`;

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <StyledUl>
      {days.map((day) => (
        <StyledLi key={day.id}>
          <StyledLink to={`/day/${day.day}`}>Day {day.day}</StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
}
