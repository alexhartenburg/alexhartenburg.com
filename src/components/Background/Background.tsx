import { useState, useEffect } from 'react';
import styled, { keyframes }  from 'styled-components';

const glowAnimation = keyframes`
  0% { background-position: 0% 100%; }
  1% { background-position: 13% 87%; }
  48% { background-position: 87% 13%; }
  49% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  51% { background-position: 87% 87%; }
  98% { background-position: 13% 13%; }
  99% { background-position: 0% 0%; }
  100% { background-position: 0% 100%; }
`;

const GlowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: 1000vw 1000vw;
  background-image: radial-gradient(${props => props.theme.palette.primary.light} 1%, ${props => props.theme.palette.warning.dark} 40%, #222 60%);
  animation: ${glowAnimation} 60s ease infinite alternate;
`;

const HoneycombGrid = styled.div`
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Row = styled.div`
  display: block;
  height: 40px;
  width: calc(100vw + 200px);
  &:nth-child(odd) {
    margin-left: -25px;
  }
  &:nth-child(1) {
    margin-top: -25px;
  }
`;

const Hexagon = styled.div`
display: inline-block;
  width: 50px;
  height: 50px;
  background: #222222;
  margin: 0 1px;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const Background = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  useEffect(() => {
    const calculateHexagons = () => {
      const hexagonHeight = 50;
      const hexagonWidth = 50;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      setRows(Math.ceil(viewportHeight / hexagonHeight)+10);
      setCols(Math.ceil(viewportWidth / hexagonWidth)+1);
    };

    calculateHexagons();
    window.addEventListener('resize', calculateHexagons);

    return () => {
      window.removeEventListener('resize', calculateHexagons);
    };
  }, []);

  return (
    <>
    <GlowContainer />
    <HoneycombGrid>
      {[...Array(rows)].map((_, i) => (
        <Row key={i}>
          {[...Array(cols)].map((_, j) => (
            <Hexagon key={j}></Hexagon>
          ))}
        </Row>
      ))}
    </HoneycombGrid>
    </>
  );
};

export default Background;