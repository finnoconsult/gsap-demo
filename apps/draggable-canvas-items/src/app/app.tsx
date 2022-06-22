import styled from '@emotion/styled';

import { Route, Routes, Link } from 'react-router-dom';
import CustomSVG from '../pages/CustomSVG/CustomSVG';
import ForbiddenOverlap from '../pages/ForbiddenOverlap/ForbiddenOverlap';
import SimpleRectangle from '../pages/SimpleRectangle/SimpleRectangle';

const StyledApp = styled.div`
`;
const StyledMenu = styled.div`
  display:flex;
  gap: 10px;
`;

export function App() {
  return (
    <StyledApp>
      <StyledMenu role="navigation">
        <Link to="/">Simple</Link>
        <Link to="/custom-svg">SVG</Link>
        <Link to="/no-overlap">No Overlap</Link>
      </StyledMenu>
      <Routes>
        <Route path="/" element={<SimpleRectangle />}/>
        <Route path="/custom-svg" element={<CustomSVG />}/>
        <Route path="/no-overlap" element={<ForbiddenOverlap />}/>
      </Routes>
    </StyledApp>
  );
}

export default App;
