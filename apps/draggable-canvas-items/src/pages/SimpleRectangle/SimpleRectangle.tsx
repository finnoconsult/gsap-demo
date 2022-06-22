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
  padding: 0;
`;
const DragItem = styled.div`
  border: solid 10px rgba(255, 0,0,0.2);
  width: 66px;
  height: 66px;
`;
const Hole = styled.div`
  border: dashed 1px black;
  height: 100%;
`;


export function SimpleRectangle(props: SimpleRectangleProps) {

  const container = React.useRef<HTMLDivElement | null>(null);

  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const item = React.useRef<HTMLDivElement | null>(null);
  const item2 = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    (window as any).gsap = gsap;
  }, []);

  React.useLayoutEffect(() => {
    if (container && item && container.current && item.current) {
      (window as any).draggables = Draggable.create(item.current, {
        bounds: container.current,
        onDragEnd: ({x, y}) => {setX(x); setY(y)},
      });
    }
  }, [container, item]);

  React.useLayoutEffect(() => {
    if (container && item2 && container.current && item2.current) {
      (window as any).draggables = Draggable.create(item2.current, {
        bounds: container.current,
        // snap: gsap.utils.snap(1),
      });
    }
  }, [container, item]);


  const moveLeft = (x: number) => { setX(x); gsap.to(item.current, {x});}
  const moveTop = (y: number) => { setY(y); gsap.to(item.current, {y});}

  return (
    <StyledSimpleRectangle>
      <Container ref={container}>
        <DragItem ref={item}  style={{borderRadius: '100%'}}><Hole   style={{borderRadius: '100%'}}/></DragItem>
        <DragItem ref={item2}><Hole /></DragItem>
      </Container>

      left <input type="number" value={x} onChange={(e) => moveLeft(+e.target.value)} min="0" max="500" />
      <br/>
      top: <input type="number" value={y} onChange={(e) => moveTop(+e.target.value)} min="0" max="200" />
    </StyledSimpleRectangle>
  );
}

export default SimpleRectangle;
