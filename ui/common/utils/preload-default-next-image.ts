import { RefObject } from 'react';


//exporting the perloadimage function
export default function preLoadImage(imgSrc: string, ref: RefObject<HTMLElement>) {
  return new Promise<void>((resolve, reject) => {
    const image = new window.Image();
    image.src = imgSrc;
    image.style.display = 'none';
    image.onload = () => {
      ref.current?.removeChild(image);
      resolve();
    };
    image.onerror = reject;
    ref.current?.appendChild(image);
  });
}

//exporting nextjsimagepath type
export type NextJsImagePathType = { encodedPath: string; imageName: string; width: string, quality?: number };


//exporting formnextjs image path
export function formNextJsImagePath({ encodedPath, imageName, width, quality = 75 }: NextJsImagePathType) {
  const nextJsPrefix = '_next/image?url=';
  return `${nextJsPrefix}${encodedPath}${imageName}&w=${width}&q=${quality}`;
}
