import { tsParticles } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { loadLinksPreset } from "tsparticles-preset-links";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";
import { loadFountainPreset } from "tsparticles-preset-fountain";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import { loadFirePreset } from "tsparticles-preset-fire";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import { loadSnowPreset } from "tsparticles-preset-snow";

export enum ParticlesType {
    Snow = "loadSnowPreset",
    Bubbles = "loadBubblesPreset",
    Confetti = "loadConfettiPreset",
    Fire = "loadFirePreset",
    Firefly = "loadFireflyPreset",
    Fireworks = "loadFireworksPreset",
    Fountain = "loadFountainPreset",
    Hyperspace = "loadHyperspacePreset",
    Triangles = "loadTrianglesPreset",
    Links = "loadLinksPreset",
    Stars = "loadStarsPreset",
}

interface PropsType {
    particlesType?: ParticlesType
}

const ParticlesComponent = (props: PropsType) => {

    (async () => {
        let presetType = '';

        switch (props.particlesType) {
            case ParticlesType.Snow: {
                await loadSnowPreset(tsParticles);
                presetType = 'snow';
                break;
            }
            case ParticlesType.Bubbles: {
                await loadBubblesPreset(tsParticles);
                presetType = 'bubbles';
                break;
            }
            case ParticlesType.Confetti: {
                await loadConfettiPreset(tsParticles);
                presetType = 'confetti';
                break;
            }
            case ParticlesType.Fire: {
                await loadFirePreset(tsParticles);
                presetType = 'fire';
                break;
            }
            case ParticlesType.Firefly: {
                await loadFireflyPreset(tsParticles);
                presetType = 'firefly';
                break;
            }
            case ParticlesType.Fireworks: {
                await loadFireworksPreset(tsParticles);
                presetType = 'fireworks';
                break;
            }
            case ParticlesType.Fountain: {
                await loadFountainPreset(tsParticles);
                presetType = 'fountain';
                break;
            }
            case ParticlesType.Hyperspace: {
                await loadHyperspacePreset(tsParticles);
                presetType = 'hyperspace';
                break;
            }
            case ParticlesType.Triangles: {
                await loadTrianglesPreset(tsParticles);
                presetType = 'triangles';
                break;
            }
            case ParticlesType.Links: {
                await loadLinksPreset(tsParticles);
                presetType = 'links';
                break;
            }
            case ParticlesType.Stars: {
                await loadStarsPreset(tsParticles);
                presetType = 'stars';
                break;
            }
            default: {
                await loadStarsPreset(tsParticles);
                presetType = 'stars';
                break;
            }
        }
        await tsParticles.load("tsparticles", {
            preset: presetType,
        });
    })();

    return (
        <div id="tsparticles" className='opacity-10'></div>
    )
}

export default ParticlesComponent