import type { Metadata } from "next";
import { Box, Canvas, S } from "@/components/Box";
import { Pic } from "@/components/Pic";
import { EmploymentForm } from "@/components/EmploymentForm";

export const metadata: Metadata = {
  title: "Join Our Team",
  alternates: { canonical: "/employment" },
  openGraph: { title: "Join Our Team | Home Care Agency", url: "/employment" },
  twitter: { title: "Join Our Team | Home Care Agency" },
};

export default function EmploymentPage() {
  return (
    <Canvas d={2089} m={2460}>
      <div className="col-bg" />
      <Box d={[0, 0, 0, 2089]} m={[0, 0, 0, 2460]} band className="veil" />

      {/* Left column */}
      <div className="emp-left bg-plum">
        <Box d={[-218, 24, 436]} fs={[49, 68.6]} m={[-140, 20, 280]} mfs={[23, 36.4]} fromCenter className="c-white center">
          <h1>
            <S d={38} m={23}>
              Join Our Team!&nbsp;
            </S>
            <br />
            <S d={30} m={21}>
              Are you passionate about providing exceptional care? We are constantly seeking compassionate individuals to join our dedicated
              team of home care professionals. If you are ready to make a difference, we invite you to explore career opportunities with us
            </S>
            <S d={38} m={23}>
              .&nbsp;
            </S>
          </h1>
        </Box>

        <Box d={[-155, 833, 38, 3]} m={[-19, 552, 38, 3]} fromCenter className="emp-rule" />
        <Pic src="/images/employment-1.jpg" d={[-169.5, 827, 339, 191]} m={[-115, 414, 230, 128]} fromCenter />
        <Pic src="/images/services-3.jpg" d={[-172, 1041, 344, 228]} m={[-120, 567, 240, 159]} fromCenter />

        <Box d={[-165, 1411, 354]} fs={[34]} m={[-140, 736, 280]} mfs={[22]} fromCenter className="c-white center">
          <h2>
            Mourning Dove Home Care, your trusted partner in home care services, where experience and compassion meet. Empowering families
            and seniors with personalized and compassionate care.
          </h2>
        </Box>
      </div>

      {/* Right column */}
      <div className="emp-right bg-mist">
        <EmploymentForm d={[-228, 0, 456, 684]} m={[-140, 20, 280, 673]} />

        <Box d={[-223, 757, 450]} fs={[49, 68.6]} m={[-140, 703, 280]} mfs={[26, 36.4]} fromCenter className="center">
          <h2>
            <span className="c-maroon">Why Choose Us?</span>
            <br />
            <br />
            Competitive Pay
            <br />
            <br />
            Ability to choose jobs
            <br />
            <br />
            Professional Growth and Training
            <br />
            <br />
            401k Plans Available
            <br />
            <S d={15} m={12}>
              (more benefits soon to come)
            </S>
          </h2>
        </Box>

        <Pic src="/images/employment-friends.jpg" d={[-300, 1525, 600, 400]} m={[-140, 1118, 280, 187]} fromCenter />
      </div>
    </Canvas>
  );
}
