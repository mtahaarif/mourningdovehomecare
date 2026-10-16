import type { Metadata } from "next";
import { Box, Canvas } from "@/components/Box";
import { Pic } from "@/components/Pic";

const title = "Mourning Dove Home Care LLC | home care services | 826 Mourning Dove Road, Eagleville, PA, USA";
const description = "Mourning Dove Home Care LLC, Home Care Services, Montco";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

export default function HomePage() {
  return (
    <Canvas d={1199} m={1974}>
      <div className="col-bg" />

      <Pic src="/images/home-hero.jpg" d={[0, 0, 980, 375]} m={[-4, 0, 328, 433]} priority />

      <Box d={[52, 25, 876, 108]} fs={[68, 95.2]} m={[20, 443, 280, 96]} mfs={[30, 42]} className="f-caslon">
        <h1>&quot;Quality Care is the Best Care&quot;</h1>
      </Box>

      <Box d={[42, 423, 898, 134]} fs={[32, 44.8]} m={[19, 566, 285, 353]} mfs={[28, 39.2]} className="c-maroon center">
        <h2>
          Mourning Dove Home Care&apos;s mission is to deliver compassionate, high-quality, and personalized care to individuals in their
          homes, enabling them to maintain independence and dignity.
        </h2>
      </Box>

      <Box d={[76, 635, 423, 311]} fs={[24, 33.6]} m={[20, 929, 280, 432]} mfs={[23, 32.2]}>
        <p>
          Our team understands the importance of delivering high-quality care in the comfort of your home. Mourning Dove Home Care is
          committed to meeting your unique needs, and we take pride in offering personalized services tailored to each individual. With a
          focus on excellence, we strive to make a meaningful difference in the lives of those we serve.
        </p>
      </Box>

      <Pic src="/images/home-supportive-hands.jpg" alt="Supportive Hands" d={[539, 598, 404, 295]} m={[20, 1370, 280, 204]} />

      <Box d={[76, 1005, 404, 138]} fs={[24, 33.6]} m={[15, 1584, 291, 173]} mfs={[24, 33.6]}>
        <p>&nbsp;We are dedicated to ensuring that our patients receive the highest standard of care in a familiar and supportive environment.</p>
      </Box>

      <Pic src="/images/home-caregiver.jpg" d={[539, 906, 404, 270]} m={[20, 1767, 280, 187]} />
    </Canvas>
  );
}
