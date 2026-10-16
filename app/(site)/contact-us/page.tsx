import type { Metadata } from "next";
import { Box, Canvas, S } from "@/components/Box";
import { Pic } from "@/components/Pic";
import { ContactForm } from "@/components/ContactForm";
import { PHONE, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact Us | Home Care Agency", url: "/contact-us" },
  twitter: { title: "Contact Us | Home Care Agency" },
};

export default function ContactPage() {
  return (
    <Canvas d={1769} m={1802}>
      <div className="col-bg" />

      <Box d={[0, 0, 0, 294]} m={[0, 0, 0, 233]} band className="bg-white" />
      <Box d={[396, 37, 187, 60]} fs={[38, 53.2]} m={[20, 20, 280, 43]} mfs={[27, 37.8]} className="f-caslon c-maroon">
        <h1>Contact Us</h1>
      </Box>
      <Box d={[48, 128, 883, 125]} fs={[28, 39.2]} m={[20, 73, 280, 140]} mfs={[20, 28]} className="italic center">
        <h2>
          If you are seeking excellent home care services or would like more information, our advisors are available to assist you with any
          questions you may have.
        </h2>
      </Box>

      <Pic src="/images/contact-nurse-greeting.jpg" alt="Nurse greeting elderly man" d={[0, 294, 0, 967]} m={[0, 233, 0, 727]} band sizes={["100vw", "100vw"]} />

      <Box d={[82, 348, 839, 202]} fs={[48, 67.2]} m={[20, 253, 280, 182]} mfs={[26, 36.4]} className="c-blue center">
        <h2>
          <br />
          For all inquiries, call <span className="d-only">{PHONE}</span>
          <a href={PHONE_HREF} className="m-only">
            {PHONE}
          </a>
          <br />
          Or submit your details via our contact form
        </h2>
      </Box>

      <ContactForm d={[209, 616, 584, 400]} m={[20, 455, 280, 485]} />

      <Box d={[0, 1261, 0, 256]} m={[0, 960, 0, 549]} band className="bg-plum" />
      <Box d={[50, 1380, 157, 60]} fs={[38, 53.2]} m={[20, 980, 280, 41]} mfs={[29, 40.6]} className="c-white bold">
        <h2>Partners</h2>
      </Box>
      <Box d={[241, 1360, 1, 100]} className="partners-rule" />
      <Pic src="/images/partner-pa-health-wellness.jpg" alt="PA_Health_Wellness_Logo.jpg" d={[298, 1343, 406, 129]} m={[115, 1079, 90, 90]} />
      <Pic src="/images/partner-upmc-health-plan.jpg" d={[763, 1343, 146, 134]} m={[110, 1179, 100, 92]} />

      <Box d={[0, 1517, 980, 251]} className="bg-plum" />
      <Box m={[0, 1529, 0, 253]} band className="bg-plum" />
      <Box d={[32, 1539, 392, 160]} fs={[38, 53.2]} m={[29, 1539, 262, 100]} mfs={[23, 32.2]} className="c-white">
        <h3>
          Hours of Operation:
          <br />
          M-Th 9:00am-5:00pm
          <br />
          Fri- 9:00am-12:30pm
        </h3>
      </Box>
      <Box d={[502, 1539, 463, 162]} fs={[38, 53.2]} m={[10, 1648, 300, 124]} mfs={[29, 40.6]} className="c-white bold">
        <h3>
          <S d={38} m={29}>
            Address:&nbsp;
          </S>
          <br />
          <S d={34} m={27}>
            589 Skippack Pike, Suite 305, Blue Bell PA 19422
          </S>
        </h3>
      </Box>
    </Canvas>
  );
}
