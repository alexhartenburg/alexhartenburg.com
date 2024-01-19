import { BlurContainer, Glow, SilhouetteContainer, SilhouetteRowFirst, SilhouetteRow, SilhouetteRowLast, Silhouette } from "./Background_styled"

const Background = () => {
    const size = 120;
    const density = 5;
    const returnSilhouettes = (x:number) => {
        let arr = [];
        for(let i=0; i<x; i++){
            arr.push(<Silhouette size={size} density={density} />)
        };
        return arr;
    }
    const returnAscendingRows = () => {
        let arr = [];
        for(let i=0; i<density; i++){
            arr.push(<SilhouetteRow size={size} density={density}>{returnSilhouettes(3+i+density)}</SilhouetteRow>)
        }
        return arr;
    }
    const returnStraightRows = () => {
        let arr = [];
        let localDensity = density + (density%2 - 1);
        for(let i=0; i<2+localDensity; i++){
            arr.push(<SilhouetteRow size={size} density={density}>{returnSilhouettes(3+2*density-i%2)}</SilhouetteRow>)
        }
        return arr;
    }
    const returnDescendingRows = () => {
        let arr = [];
        for(let i=0; i<density; i++){
            arr.push(<SilhouetteRow size={size} density={density}>{returnSilhouettes(2+2*density-i)}</SilhouetteRow>)
        }
        return arr;
    }
    return(
        <>
        <BlurContainer>
            <Glow size={size}/>
        </BlurContainer>
        <SilhouetteContainer size={size}>
            <SilhouetteRowFirst size={size} density={density}>
                {returnSilhouettes(2+density)}
            </SilhouetteRowFirst>
            {returnAscendingRows()}
            {returnStraightRows()}
            {returnDescendingRows()}
            <SilhouetteRowLast size={size} density={density}>
                {returnSilhouettes(2+density)}
            </SilhouetteRowLast>
        </SilhouetteContainer>
        </>
    )
}

export default Background;