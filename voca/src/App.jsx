import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import styled from "styled-components";

const StyledApp = styled.div`
    width: 800px;
    margin: 0 auto;
`;

function App() {
    return (
        <StyledApp>
            <Header />
            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="/create_word" element={<CreateWord />} />
                <Route path="/create_day" element={<CreateDay />} />
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </StyledApp>
    );
}

export default App;