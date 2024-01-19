import { BlurContainer, Glow, SilhouetteContainer, SilhouetteRow, Silhouette } from "./Background_styled"

const Background = () => {
    return(
        <>
        <BlurContainer>
            <Glow />
        </BlurContainer>
        <SilhouetteContainer>
            <SilhouetteRow>
                <Silhouette />
            </SilhouetteRow>
            <SilhouetteRow>
                <Silhouette />
                <Silhouette />
            </SilhouetteRow>
            <SilhouetteRow>
                <Silhouette />
                <Silhouette />
                <Silhouette />
            </SilhouetteRow>
            <SilhouetteRow>
                <Silhouette />
                <Silhouette />
            </SilhouetteRow>
            <SilhouetteRow>
                <Silhouette />
                <Silhouette />
                <Silhouette />
            </SilhouetteRow>
            <SilhouetteRow>
                <Silhouette />
                <Silhouette />
            </SilhouetteRow>
            <SilhouetteRow>
                <Silhouette />
            </SilhouetteRow>
        </SilhouetteContainer>
        </>
    )
}

export default Background;