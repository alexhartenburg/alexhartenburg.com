import styled from "styled-components";
import { keyframes } from "styled-components";

const h = 60;
const n = 7;




const BlurContainer = styled.div`
    width: 100vw;
    height: 100vh;
    -webkit-filter: blur(5vw);
    -moz-filter: blur(5vw);
    -ms-filter: blur(5vw);
    filter: blur(5vw);
`
const glowAnimation = keyframes`
    0% {
        background-position: left bottom;
    }
    50% {
        background-position: left bottom;
    }
    55% {
        background-position: right top;
    }
    100% {
        background-position: right top;
    }
`
const Glow = styled.div<{ size: number }>`
    position: absolute;
    width: min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh);
    height: min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(0% 30%, 0% 70%, 25% 100%, 75% 100%, 100% 70%, 100% 30%, 75% 0%, 25% 0%);
    background-image: linear-gradient(45deg, #444 45%, #555 50%, #444 55%);
    background-size: 220% 220%;
    animation: ${glowAnimation} 10s linear infinite;
`
const SilhouetteContainer = styled.div<{ size: number }>`
    position: absolute;
    width: min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh);
    height: min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh);
    top: 50%;
    left: 50%;
    padding: 0;
    margin: 0;
    overflow: visible;
    transform: translate(-50%, -50%);
`
const SilhouetteRow = styled.div<{ size: number, density: number }>`
    display: block;
    text-align: center;
    width: 100%;
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6});
    padding: 0;
    margin: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / -5) 0;
    height: calc(min(10, 10) - 12px);
`
const SilhouetteRowFirst = styled.div<{ size: number, density: number }>`
    display: block;
    text-align: center;
    width: 100%;
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6});
    padding: 0;
    margin: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / 10) 0 calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / -5) 0;
    height: calc(min(10, 10) - 12px);
`
const SilhouetteRowLast = styled.div<{ size: number, density: number }>`
    display: block;
    text-align: center;
    width: 100%;
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6});
    padding: 0;
    margin: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / -5) 0;
    height: calc(min(10, 10) - 12px);
`
const Silhouette = styled.div<{ size: number, density: number }>`
    display: inline-block;
    width: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) - 1px);
    height: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) - 1px);
    margin: 0 calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / 100);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: #222;
`

export { BlurContainer, Glow, SilhouetteContainer, SilhouetteRowFirst, SilhouetteRow, SilhouetteRowLast, Silhouette }