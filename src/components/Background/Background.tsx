import { useState, useEffect } from 'react';
import styled, { keyframes }  from 'styled-components';

const colorSpeed = 45;
const positionSpeed = 60;
const opacitySpeed = 40;

const glowAnimation = (colors: object) => keyframes`
    10% { background-color: ${colors.primary.dark}; }
    20% { background-color: ${colors.warning.main}; }
    30% { background-color: ${colors.primary.light}; }
    40% { background-color: ${colors.error.main}; }
    50% { background-color: ${colors.primary.main}; }
    60% { background-color: ${colors.secondary.dark}; }
    70% { background-color: ${colors.error.main}; }
    80% { background-color: ${colors.primary.light}; }
    90% { background-color: ${colors.warning.main}; }
    100% { background-color: ${colors.primary.dark}; }
`;

const glowPositionAnimation = keyframes`
    0% { background-position: 0% 0%; }
    25% { background-position: 0% 100%; }
    50% { background-position: 100% 0%; }
    75% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
`;

const glowOpacityAnimation = keyframes`
    0% { background-color: rgba(34,34,34,1); }
    50% { background-color: rgba(34,34,34,0); }
    100% { background-color: rgba(34,34,34,1); }
`;

const GlowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -3;
    width: 100vw;
    height: 100vh;
    animation: ${(props) => glowAnimation(props.theme.palette)} ${colorSpeed}s linear infinite alternate;
`;

const PositionMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(transparent 0%, #222 45%);
    background-size: 150% 150%;
    animation: ${glowPositionAnimation} ${positionSpeed}s linear infinite;
`

const OpacityMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    animation: ${glowOpacityAnimation} ${opacitySpeed}s ease infinite;
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
    <PositionMask />
    <OpacityMask />
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