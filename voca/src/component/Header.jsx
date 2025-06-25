import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
    position: relative;
    `;
const Styledmenu =styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    `;

const StyledA = styled(Link)`
    text-decoration: none;
    color: #333;`;

const StyledLink = styled(Link)`
    border: 1px solid #333;
    padding: 10px;
    margin-left: 10px;
    background-color: #efefef;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    color: #333;`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>
                <StyledA to="/">영어 단어장 만들기</StyledA>
            </h1>
            <Styledmenu>
                <StyledLink to="/create_word">
                단어 추가
                </StyledLink>
                <StyledLink to="/create_day" className="link">
                Day 추가
                </StyledLink>
            </Styledmenu>
        </StyledHeader>
    );
}