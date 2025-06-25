import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledA = styled(Link)`
    text-decoration: none;
    color: #333;`;

export default function EmptyPage() {
    return (
        <>
            <h2>잘못된 접근입니다.</h2>
            <StyledA to ="/">돌아가기</StyledA>
        </>
    );
}