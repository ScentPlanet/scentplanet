import { Composition, Still, Folder } from "remotion";
import { ScentPlanetPromo } from "./ScentPlanetPromo";
import { ScentPlanetBanner } from "./ScentPlanetBanner";

export const RemotionRoot = () => {
  return (
    <>
      <Folder name="Promo">
        <Composition
          id="ScentPlanetPromo"
          component={ScentPlanetPromo}
          durationInFrames={360} // 12 seconds at 30fps
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="Stills">
        <Still
          id="ScentPlanetBanner"
          component={ScentPlanetBanner}
          width={1280}
          height={640}
        />
      </Folder>
    </>
  );
};
