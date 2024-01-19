import styled from "styled-components";
import { keyframes } from "styled-components";

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
const Glow = styled.div`
    position: absolute;
    width: min(60vw, 60vh);
    height: min(60vw, 60vh);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-image: linear-gradient(45deg, #444 45%, #555 50%, #444 55%);
    background-size: 220% 220%;
    animation: ${glowAnimation} 10s linear infinite;
`
const SilhouetteContainer = styled.div`
    position: absolute;
    width: min(60vw, 60vh);
    height: min(60vw, 60vh);
    top: 50%;
    left: 50%;
    padding: 0;
    margin: 0;
    transform: translate(-50%, -50%);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
`
const SilhouetteRow = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
    height: calc(min(10, 10) - 12px);
`
const Silhouette = styled.div`
    display: inline-block;
    width: calc(min(10vw, 10vh) - 1px);
    height: calc(min(10vw, 10vh) - 1px);
    margin: -6px 2px;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background-color: #222;
`

export { BlurContainer, Glow, SilhouetteContainer, SilhouetteRow, Silhouette }