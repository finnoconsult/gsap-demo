import styled from '@emotion/styled';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import React from 'react';

/* eslint-disable-next-line */
export interface SimpleRectangleProps {}

const StyledSimpleRectangle = styled.div`
  color: pink;
`;

gsap.registerPlugin(Draggable);


const Container = styled.div`
  border: solid 10px rgba(255, 0,0,0.2);
  outline: solid 1px black;
  width: 500px;
  height: 200px;
`;
const DragItem = styled.div`
  border: solid 10px rgba(255, 0,0,0.2);
  margin: 10px;
  width: 100px;
  height: 100px;
`;
const Hole = styled.div`
  border: dashed 1px black;
  height: 100%;
`;

export function SimpleRectangle(props: SimpleRectangleProps) {

  const container = React.useRef<HTMLDivElement | null>(null);
  const item = React.useRef<HTMLDivElement | null>(null);
  const item2 = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (container && item && container.current && item.current) {
      Draggable.create(item.current, {
        bounds: container.current,
      });
    }
  }, [container, item]);

  React.useLayoutEffect(() => {
    if (container && item2 && container.current && item2.current) {
      Draggable.create(item2.current, {
        bounds: container.current,
      });
    }
  }, [container, item]);


  return (
    <StyledSimpleRectangle>
      <Container ref={container}>
        <DragItem ref={item}  style={{borderRadius: '100%'}}><Hole   style={{borderRadius: '100%'}}/></DragItem>
        <DragItem ref={item2}><Hole /></DragItem>
      </Container>
      <h1>Welcome to SimpleRectangle!</h1>
    </StyledSimpleRectangle>
  );
}

export default SimpleRectangle;
