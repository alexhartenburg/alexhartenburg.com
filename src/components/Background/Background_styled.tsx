import styled from "styled-components";
import { keyframes } from "styled-components";

const BlurContainer = styled.div`
    width: 100vw;
    height: 100vh;
    -webkit-filter: blur(2vw);
    -moz-filter: blur(2vw);
    -ms-filter: blur(2vw);
    filter: blur(2vw);
`
const glowAnimation = keyframes`
    0% {
        background-position: 0% 100%;
    }
    100% {
        background-position: 100% 0%;
    }
`
const Glow = styled.div<{ size: number }>`
    position: absolute;
    width: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) * 0.81);
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) * 1.02);
    transform: rotate3d(10,-2,2,70deg);
    top: -6%;
    right: -5%;
    clip-path: polygon(0% 30%, 0% 70%, 25% 100%, 75% 100%, 100% 70%, 100% 30%, 75% 0%, 25% 0%);
    background-image: linear-gradient(45deg, #029e84 0%, #9e7702 50%, #029e84 100%);
    background-size: 2000% 2000%;
    animation: ${glowAnimation} 10s linear infinite;
`
const SilhouetteContainer = styled.div<{ size: number }>`
    position: absolute;
    width: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) ) 0.99);
    height: min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh);
    transform: rotate3d(10,-2,2,70deg);
    top: -10%;
    right: -10%;
    padding: 0;
    margin: 0;
    overflow: visible;
`
const SilhouetteRow = styled.div<{ size: number, density: number }>`
    display: block;
    text-align: center;
    width: 100%;
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6});
    padding: 0;
    margin: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / 10) 0;
    height: calc(min(10, 10) - 12px);
    filter: drop-shadow(2px 9px 2px rgba(20,20,20,0.5));
`
const SilhouetteRowFirst = styled.div<{ size: number, density: number }>`
    display: block;
    text-align: center;
    width: 100%;
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6});
    padding: 0;
    margin: 0 0 calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / -50) 0;
    height: calc(min(10, 10) - 12px);
    filter: drop-shadow(2px 9px 2px rgba(20,20,20,0.5));
`
const SilhouetteRowLast = styled.div<{ size: number, density: number }>`
    display: block;
    text-align: center;
    width: 100%;
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6});
    padding: 0;
    margin: calc(calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 4 + 3 * props.density || 6}) / -50) 0;
    height: calc(min(10, 10) - 12px);
    filter: drop-shadow(2px 9px 2px rgba(20,20,20,0.5));
`
const Silhouette = styled.div<{ size: number, density: number }>`
    display: inline-block;
    width: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 2 + 2.9 * props.density || 6});
    height: calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / ${(props) => 2 + 2.9 * props.density || 6});
    margin: 0 calc(min(${(props) => props.size || 50}vw, ${(props) => props.size || 50}vh) / 200);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: #222;
`

export { BlurContainer, Glow, SilhouetteContainer, SilhouetteRowFirst, SilhouetteRow, SilhouetteRowLast, Silhouette }