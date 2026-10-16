import type { Metadata } from "next";
import Image from "next/image";
import { Box, Canvas, S } from "@/components/Box";
import { Pic } from "@/components/Pic";

const description =
  "Mourning Dove Home Care LLC is a home care service provider based out of Montgomery County, Pennsylvania. Our mission is to deliver compassionate, high-quality, and personalized care to individuals in their homes. ";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | Home Care Agency", description, url: "/services" },
  twitter: { title: "Services | Home Care Agency", description },
};

const TOP_IMAGES = ["/images/services-1.jpeg", "/images/services-2.jpg", "/images/services-3.jpg"];

const CONDITIONS = [
  "-Intellectual Disability (ID)",
  "-Autism Spectrum Disorder (ASD)",
  "-Cerebral Palsy",
  "-Down Syndrome",
  "-Fetal Alcohol Spectrum Disorders (FASD)",
  "-Fragile X Syndrome",
  "-Prader-Willi Syndrome",
  "-Spina Bifida",
  "-Other Neurological Conditions",
].join("   ");

export default function ServicesPage() {
  return (
    <Canvas d={2645} m={4444}>
      <div className="col-bg" />

      {/* Full-bleed three-image strip (desktop) / stacked images (mobile) */}
      <Box d={[0, 0, 0, 324]} band className="tri-row">
        {TOP_IMAGES.map((src) => (
          <div key={src}>
            <Image src={src} alt="" fill quality={85} priority sizes="34vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </Box>
      {TOP_IMAGES.map((src, i) => (
        <Pic key={src} src={src} m={[20, 20 + i * 187 - (i === 2 ? 1 : 0), 280, 187]} />
      ))}

      <Box d={[0, 323, 0, 132]} m={[0, 1234, 0, 106]} band className="bg-white" />

      <Box d={[8, 355, 960, 67]} fs={[48, 67.2]} m={[20, 1254, 280, 66]} mfs={[23, 32.2]} className="c-maroon center">
        <h1>Non-Skilled Home Care Services:</h1>
      </Box>

      <Box d={[267, 487, 445, 422]} fs={[36, 50.4]} m={[20, 1387, 280, 291]} mfs={[26, 36.4]} className="center">
        <h2>
          Companionship
          <br />
          Meal Planning
          <br />
          Personal Care/Hygiene
          <br />
          Light Housekeeping
          <br />
          Support for ADL&apos;s and IADL&apos;s
          <br />
          Medication Reminders
          <br />
          Respite Care
        </h2>
      </Box>

      <Box d={[42, 876, 908, 50]} fs={[18, 25.2]} m={[20, 1741, 280, 78]} mfs={[14, 19.6]} className="center">
        <p>
          We also provide specialized care for individuals with specific needs, such as Alzheimer&apos;s or dementia, physical disabilities,
          and post-operative care.
        </p>
      </Box>

      <Box d={[-139.5, 927, 1259, 96]} className="bg-plum" />
      <Box m={[0, 1839, 0, 157]} band className="bg-plum" />
      <Box d={[48, 946, 883, 59]} fs={[14, 19.6]} m={[25, 1871, 279, 108]} mfs={[11, 15.4]} className="f-helv-light c-white center">
        <p>
          The following services are specifically designed to address the needs of the client only. Please note that seasonal chores,
          maintenance tasks, heavy duty cleaning, lawn care, pet care, and assistance for family members or guests residing in the same
          household are not included unless explicitly arranged through our office.&nbsp;
        </p>
      </Box>

      {/* Supported Employment Services */}
      <Box d={[0, 1024, 0, 627]} m={[0, 2016, 0, 605]} band className="se">
        <div className="se-left bg-mist">
          <Box d={[-242.5, 0, 485]} fs={[56]} m={[-140, 20, 280]} mfs={[35]} fromCenter className="c-maroon center">
            <h2>Supported Employment Services</h2>
          </Box>
          <Box d={[-205, 231, 439]} fs={[33, 46.2]} m={[-140, 156, 280]} mfs={[22, 30.8]} fromCenter className="center">
            <p>
              Partnered with UPMC Health Plan, Mourning Dove Home Care’s Supported Employment Services help adults with intellectual and
              developmental disabilities find meaningful jobs within their communities.
            </p>
          </Box>
        </div>
        <div className="se-img">
          <Image
            src="/images/services-woman-gardening.jpg"
            alt="Woman Gardening Smiling"
            fill
            quality={85}
            sizes="(max-width: 750px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Box>

      {/* ODP Services */}
      <Box d={[0, 1651, 0, 995]} m={[0, 2620, 0, 1824]} band className="veil" />

      <Box d={[36, 1675, 907, 78]} fs={[56, 78.4]} m={[10, 2640, 300, 42]} mfs={[30, 42]} className="c-maroon center">
        <h2>ODP Services</h2>
      </Box>
      <Box d={[65, 1775, 850, 65]} fs={[18, 32.4]} m={[20, 2692, 280, 144]} mfs={[16, 28.8]} className="center">
        <p>
          We offer services, support, and resources to individuals with intellectual and developmental disabilities, including autism, in
          Montgomery County, PA, and the surrounding counties.
        </p>
      </Box>

      <Pic src="/images/odp-friends-popsicles.jpg" alt="Friends With Popsicles" d={[50, 1893, 219, 219]} m={[110, 2856, 100, 100]} round />
      <Pic src="/images/odp-group-dance.jpg" alt="Group Dance Class" d={[380, 1893, 219, 219]} m={[85, 2966, 150, 150]} round />
      <Pic src="/images/odp-learning-together.jpeg" alt="Learning Together" d={[712, 1894, 219, 219]} m={[110, 3636, 100, 100]} round />

      <Box d={[20, 2141, 280, 288]} fs={[16, 28.8]} m={[20, 3126, 280, 288]} className="center">
        <p>
          Mourning Dove Home Care provides specialized companionship services for individuals with intellectual disabilities, thoughtfully
          designed to support their health, safety, and overall well-being. Our companions go beyond simply offering company—they deliver
          essential supervision and attentive care, helping create a safe, nurturing environment for your loved one.
        </p>
      </Box>
      <Box d={[350, 2141, 280, 202]} fs={[16, 28.8]} m={[20, 3424, 280, 202]} className="center">
        <p>
          Our ODP Services include Community Participation Support, Homemaker and Chore Services and Companionship. These services are
          offered both at home and throughout the community, helping your loved one live a meaningful and independent life wherever they may
          be.&nbsp;
        </p>
      </Box>
      <Box d={[682, 2141, 280, 317]} fs={[16, 28.8]} m={[20, 3746, 280, 317]} className="center">
        <p>Eligibility:</p>
        <p>
          Eligibility for services through the Office of Developmental Programs (ODP) depends on having a diagnosed intellectual or
          developmental disability. If you or a loved one has a lifelong condition that impacts learning and daily living—including
          autism—we’re here to help. Our team will support you through the enrollment process with compassion and clarity.
        </p>
      </Box>

      <Box d={[-131, 2487, 1279, 159]} m={[20, 4073, 280, 351]} className="bg-plum" />
      <Box d={[16, 2490, 949, 154]} fs={[33, 46.2]} m={[20, 4083, 280, 311]} mfs={[26, 36.4]} className="center">
        <h3>
          <S d={24} m={23} className="c-sky">
            Eligible Conditions Include (but not limited to):
          </S>
          <br />
          <S d={16} m={15} className="c-white">
            {CONDITIONS}
          </S>
        </h3>
      </Box>
    </Canvas>
  );
}
