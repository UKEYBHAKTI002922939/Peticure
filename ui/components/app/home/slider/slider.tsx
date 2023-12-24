import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "react-awesome-slider/dist/styles.css";
import preLoadImage, {
  formNextJsImagePath,
} from "@/common/utils/preload-default-next-image";

import Image from "next/image";
import { useRef } from "react";
import { SliderText } from "./silder-text/slider-text";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const data = [
  { src: "/images/dogWoman.jpeg", alt: "dogs" },
  { src: "/images/strays.webp", alt: "dogs" },
  { src: "/images/dogParents.jpeg", alt: "dogs" },
];

/**
 * A Slider component that displays a slideshow of images with accompanying text.
 * @ The Slider component.
 */
export default function Slider() {
  const quality = 100;
  const secRef = useRef<HTMLElement>(null);
  const isLoaded = useRef<Map<string, boolean>>(new Map<string, boolean>());
  return (
    <section>
      <AutoplaySlider
        play
        interval={5000}
        animation="cubeAnimation"
        bullets={false}
        infinite
        organicArrows={true}
      >
        {data.map((imageData, index) => (
          <div className="awssld__custom-image-container" key={imageData.alt}>
            <Image
              src={imageData.src}
              fill
              alt={imageData.alt}
              quality={quality}
              onLoad={(img) => {
                if (index < data.length - 1) {
                  const nextImageData = data[index + 1];
                  const encodedPath = encodeURIComponent(
                    nextImageData.src.substring(
                      0,
                      nextImageData.src.lastIndexOf("/") + 1
                    )
                  );
                  const imageName = nextImageData.src.substring(
                    nextImageData.src.lastIndexOf("/") + 1
                  );
                  const nextImageSrc = formNextJsImagePath({
                    encodedPath,
                    imageName,
                    width:
                      new URLSearchParams(
                        (img.target as HTMLImageElement).src
                      ).get("w") ?? "100%",
                    quality: quality,
                  });
                  if (!isLoaded.current.has(nextImageSrc)) {
                    isLoaded.current.set(imageData.src, true);
                    preLoadImage(nextImageSrc, secRef);
                  }
                }
              }}
              {...(index === 0 && { priority: true })}
              className="awssld__custom-image"
            />
            <SliderText />
          </div>
        ))}
      </AutoplaySlider>
    </section>
  );
}
