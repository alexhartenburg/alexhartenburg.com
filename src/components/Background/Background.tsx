import { useState, useEffect } from 'react';
import styled, { keyframes }  from 'styled-components';

const glowAnimation = (props: string) => keyframes`
    0% { background: #222; }
    20% { background-color: ${props}; }
    100% { background-color: #222; }
`;

const glowPositionAnimation = keyframes`
    0% { background-position: 0% 0%; }
    25% { background-position: 0% 100%; }
    50% { background-position: 100% 0%; }
    75% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
`;

const GlowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    animation: ${props => glowAnimation("#555")} 10s ease infinite alternate;
`;

// ${props => props.theme.colors.primary.light};

const GlowMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(transparent 0%, #222 50%);
    background-size: 150% 150%;
    animation: ${glowPositionAnimation} 30s ease infinite;
`

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
    <GlowMask />
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