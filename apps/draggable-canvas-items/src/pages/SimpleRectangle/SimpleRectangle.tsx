import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SimpleRectangleProps {}

const StyledSimpleRectangle = styled.div`
  color: pink;
`;

export function SimpleRectangle(props: SimpleRectangleProps) {
  return (
    <StyledSimpleRectangle>
      <h1>Welcome to SimpleRectangle!</h1>
    </StyledSimpleRectangle>
  );
}

export default SimpleRectangle;
