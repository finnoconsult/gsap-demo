import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CustomSVGProps {}

const StyledCustomSVG = styled.div`
  color: pink;
`;

export function CustomSVG(props: CustomSVGProps) {
  return (
    <StyledCustomSVG>
      <h1>Welcome to CustomSVG!</h1>
    </StyledCustomSVG>
  );
}

export default CustomSVG;
