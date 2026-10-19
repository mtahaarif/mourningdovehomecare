"use client";

/**
 * `Img` for images that load eagerly (heroes and other above-the-fold photos),
 * deliberately rendered as a client component. React's RSC renderer turns every
 * eager <img> in a Server Component into a preload hint inside the page's RSC
 * payload, and the router acts on those hints when it prefetches a link, so each
 * page linking here would download these photos as well. From a client component
 * the preload comes only from this page's own HTML. Lazy images stay on `Img`.
 */
export { Img as EagerImg } from "./Img";
