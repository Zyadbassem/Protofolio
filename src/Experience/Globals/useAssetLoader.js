import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useState } from "react";

// Global cache to prevent re-fetching across component remounts
const audioCache = {};

export function useAssetLoader() {
  const [assets, setAssets] = useState({
    meteoriteAudio: null,
    laserAudio: null,
  });

  useEffect(() => {
    const loader = new THREE.AudioLoader();
    const loadAudio = (url, key) => {
      if (audioCache[key]) {
        return Promise.resolve(audioCache[key]);
      }
      return new Promise((resolve, reject) => {
        loader.load(
          url,
          (buffer) => {
            audioCache[key] = buffer;
            resolve(buffer);
          },
          undefined,
          (err) => {
            console.error(`Failed to load audio: ${url}`, err);
            reject(err);
          }
        );
      });
    };

    Promise.all([
      loadAudio("./meteorite/asteroidsound0.mp3", "meteorite"),
      loadAudio("./ship/laserShot.mp3", "laser"),
    ]).then(([meteoriteAudio, laserAudio]) => {
      setAssets({
        meteoriteAudio,
        laserAudio,
      });
    });
  }, []);

  return assets;
}
