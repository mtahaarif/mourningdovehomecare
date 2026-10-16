import type { Metadata } from "next";
import { Box, Canvas } from "@/components/Box";
import { Pic } from "@/components/Pic";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Home Care Agency", url: "/about" },
  twitter: { title: "About | Home Care Agency" },
};

export default function AboutPage() {
  return (
    <Canvas d={1096} m={2218}>
      <div className="col-bg" />

      <Pic src="/images/about-1.jpg" d={[0, 0, 327, 435]} m={[20, 10, 280, 373]} pos="72% 50%" priority />
      <Pic src="/images/about-2.jpg" d={[327, 0, 327, 435]} m={[20, 383, 280, 373]} pos="13% 50%" priority />
      <Pic src="/images/about-3.jpg" d={[654, 0, 326, 435]} m={[20, 757, 280, 373]} pos="73% 50%" priority />

      <Box d={[0, 435, 0, 316]} m={[0, 1150, 0, 346]} band className="bg-white" />

      <Box d={[42, 475, 883, 236]} fs={[49]} m={[29, 1170, 262, 306]} mfs={[29]} className="center">
        <h1>
          Mourning Dove Home Care is a home care service provider based out of Montgomery County, Pa. Servicing Montgomery County and the
          surrounding areas.
        </h1>
      </Box>

      <Box d={[42, 786, 896, 274]} fs={[28, 39.2]} m={[20, 1506, 280, 692]} mfs={[26, 36.4]} className="c-maroon center">
        <p>
          We are committed to enhancing the quality of life for our clients during their golden years by tailoring care that maximizes
          independence and meets individual needs. Our goal is to empower patients to live more independently. We collaborate closely with
          the patient&apos;s physician to implement their directives, acting as their eyes and ears in the process. Above all, we are
          committed to providing compassionate care within the comfort of the client&apos;s home.
        </p>
      </Box>
    </Canvas>
  );
}
