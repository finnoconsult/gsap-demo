import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ForbiddenOverlapProps {}

const StyledForbiddenOverlap = styled.div`
  color: pink;
`;

export function ForbiddenOverlap(props: ForbiddenOverlapProps) {
  return (
    <StyledForbiddenOverlap>
      <h1>Welcome to ForbiddenOverlap!</h1>
    </StyledForbiddenOverlap>
  );
}

export default ForbiddenOverlap;
