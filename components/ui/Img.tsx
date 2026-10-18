import { getImageProps, type ImageProps } from "next/image";
import { preload as preloadResource } from "react-dom";

/** Widest candidate used for the plain `src` fallback. */
const FALLBACK_MAX_WIDTH = 1080;

/**
 * Optimised image rendered as a plain <img> (no client component to hydrate).
 *
 * - Browsers choose from the full `srcset`, exactly as with next/image.
 * - The `src` fallback, read only by clients without srcset support (mostly
 *   crawlers), is a mid-size candidate instead of the very largest one.
 * - `preload` marks a likely LCP image: it loads eagerly with high priority
 *   and a <link rel="preload"> is hoisted into the document head.
 */
export function Img({ preload = false, ...props }: ImageProps) {
  const { props: img } = getImageProps({ ...props, preload });
  const { srcSet, sizes, style, ...rest } = img;

  let src = img.src;
  if (srcSet) {
    const candidates = srcSet.split(", ").map((entry) => {
      const [url, descriptor] = entry.split(" ");
      return { url, width: descriptor.endsWith("w") ? parseInt(descriptor, 10) : 0 };
    });
    const sized = candidates.filter((c) => c.width > 0 && c.width <= FALLBACK_MAX_WIDTH);
    // Width descriptors: largest ≤ 1080px. Density descriptors (1x, 2x): the 1x source.
    src = (sized.length ? sized[sized.length - 1] : candidates[0]).url;
  }

  if (preload) {
    preloadResource(src, { as: "image", imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: "high" });
  }

  // Drop next/image's `color: transparent` (it hides alt text while loading); keep any caller styles.
  const { color, ...restStyle } = style ?? {};
  const finalStyle = color && color !== "transparent" ? { ...restStyle, color } : restStyle;

  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- optimised via getImageProps; alt is passed through
    <img
      {...rest}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      fetchPriority={preload ? "high" : rest.fetchPriority}
      style={Object.keys(finalStyle).length ? finalStyle : undefined}
    />
  );
}
