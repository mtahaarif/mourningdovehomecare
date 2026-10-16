import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Box, Canvas } from "@/components/Box";
import { Pic } from "@/components/Pic";

export const metadata: Metadata = {
  title: "Testimonials",
  alternates: { canonical: "/general-4" },
  openGraph: { title: "Testimonials | Home Care Agency", url: "/general-4" },
  twitter: { title: "Testimonials | Home Care Agency" },
};

type Review = {
  name: string;
  muted: boolean;
  /** Desktop quote text width (centered in the cell). */
  width: 310 | 280;
  /** Mobile [icon top, name top, text top], text width and name font size. */
  mobile: { icon: number; name: number; text: number; width: 260 | 280; nameSize: 19 | 18 };
  body: ReactNode;
};

const M1 = { icon: 38, name: 98, text: 141, width: 260, nameSize: 19 } as const;
const M2 = { icon: 77, name: 137, text: 175, width: 280, nameSize: 19 } as const;
const M3 = { icon: 57, name: 117, text: 159, width: 280, nameSize: 18 } as const;

const ROW_1: Review[] = [
  {
    name: "Richard Duvall, PA",
    muted: false,
    width: 310,
    mobile: M1,
    body: (
      <>
        &quot;This the Daughter of Richard Duvall commenting about the care and attention given to me and my family during what turned out
        to be Dad’s final 2 weeks. We were preparing to sign up with Mourning Dove. But unfortunately, Daddy’s health took a turn for the
        worse. He had to be admitted to the hospital and subsequently passed away there. While we didn’t get a chance to use any of the CNA
        Service’s provided by Mourning Dove, I can say that I really appreciated the care and attention to detail and the compassion and a
        concern for my family. I could only imagine what that would have looked like had they been able to provide Dad with actual CNA.
        They were very patient and understanding with our family and I would highly recommend them. I encourage Mourning Dove to keep up
        the good work.&quot;
      </>
    ),
  },
  {
    name: "Joshua Amoro, PA",
    muted: true,
    width: 310,
    mobile: M2,
    body: (
      <>
        &quot;Mourning Dove Home Care LLC made the whole process of getting my home care license so much easier. They were patient,
        supportive, and always took the time to answer all of my questions. I’m so thankful for their help and guidance every step of the
        way!”
      </>
    ),
  },
  {
    name: "Evan Vargas, PA",
    muted: false,
    width: 280,
    mobile: M3,
    body: (
      <>
        &quot;Mourning Dove Home Care LLC truly goes above and beyond.
        <br />
        Their team is compassionate, reliable, and genuinely cares about the well-being of their clients. From day one, communication was
        clear, professional, and supportive. They treat families with respect and provide a level of comfort and peace of mind that is hard
        to find.
        <br />I highly recommend Mourning Dove Home Care LLC to anyone looking for trustworthy, high-quality home care services. They really
        make a difference&quot;
      </>
    ),
  },
];

const ROW_2: Review[] = [
  {
    name: "Ali Schubert, PA",
    muted: true,
    width: 310,
    mobile: M1,
    body: (
      <>
        &quot;Mel is very professional and kind. Always willing to answer any questions that I may have and always willing to help. Thank
        you&quot;
      </>
    ),
  },
  {
    name: "Elijah Smith, PA",
    muted: false,
    width: 310,
    mobile: M2,
    body: (
      <>
        &quot;I want to express my deepest gratitude to Mourning Dove Home Care for the incredible care they provided to my uncle. From the
        very first day, their team showed genuine kindness, patience, and respect—not just toward him, but toward our entire family.
        <br />
        My uncle wasn’t just another client to them. They treated him like family. The caregivers took the time to listen to his stories,
        learn his routines, and make sure he felt valued and comfortable every day. Their warmth and professionalism gave us peace of mind,
        knowing he was in loving and capable hands.
        <br />
        Even during difficult moments, the caregivers showed unwavering compassion and understanding. Their presence brought light and
        comfort to our home when we needed it most.
        <br />
        Thank you, Mourning Dove Home Care for going above and beyond. Your dedication and heart made all the difference in my uncle’s
        life—and in ours. We’ll forever be grateful for the love and dignity you gave him.&quot;
      </>
    ),
  },
  {
    name: "Aaron Spence, PA",
    muted: true,
    width: 280,
    mobile: M3,
    body: (
      <>
        &quot;I’ve known Mel for twenty years. Mel and Jasmine are very caring people. He is experienced they will care for your loved
        ones.&quot;
      </>
    ),
  },
];

function QuoteIcon({ color }: { color: string }) {
  return (
    <svg viewBox="40 40 120 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path fill={color} d="M40 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.3-21 45.4h21V160H40z" />
      <path fill={color} d="M112.9 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.4-21 45.4h21V160h-47.1z" />
    </svg>
  );
}

function ReviewRow({ reviews, color, d, m, rows }: { reviews: Review[]; color: string; d: [number, number]; m: [number, number]; rows: string }) {
  return (
    <Box d={[0, d[0], 0, d[1]]} m={[0, m[0], 0, m[1]]} band className="tgrid" style={{ "--rows": rows } as CSSProperties}>
      {reviews.map((r) => (
        <article key={r.name} className={`tcell f-avenir${r.muted ? " c-muted" : ""}`}>
          <Box d={[-30, 92, 60, 60]} m={[-20, r.mobile.icon, 40, 40]} fromCenter className="quote-icon">
            <QuoteIcon color={color} />
          </Box>
          <Box d={[-163.5, 227, 327, 31]} fs={[26]} m={[-140, r.mobile.name, 280]} mfs={[r.mobile.nameSize]} fromCenter className="center">
            <h2>{r.name}</h2>
          </Box>
          <Box
            d={[-r.width / 2, 278, r.width]}
            fs={[14, 25.2]}
            m={[-r.mobile.width / 2, r.mobile.text, r.mobile.width]}
            mfs={[15, 27]}
            fromCenter
            className="center"
          >
            <blockquote>{r.body}</blockquote>
          </Box>
        </article>
      ))}
    </Box>
  );
}

export default function TestimonialsPage() {
  return (
    <Canvas d={2335} m={4518} className="page-mist">
      <Box d={[0, 0, 0, 256]} band className="bg-white m-hide" />
      <Box d={[-150, 40, 1280, 176]} m={[0, 0, 0, 316]} className="bg-mist testimonials-hero" />
      <Box d={[-1, 99, 980, 57]} fs={[48]} m={[20, 40, 280, 99]} mfs={[28]} className="italic center">
        <h1>See What People Are Saying (Google Reviews)</h1>
      </Box>

      <Box d={[0, 256, 0, 778]} m={[0, 316, 0, 1794]} band className="bg-white" />
      <ReviewRow reviews={ROW_1} color="#116DFF" d={[256, 768]} m={[316, 1774]} rows="828px 374px 567px" />

      <Box d={[0, 1034, 0, 900]} m={[0, 2110, 0, 1578]} band className="bg-white" />
      <ReviewRow reviews={ROW_2} color="#BADA55" d={[1034, 900]} m={[2110, 1558]} rows="288px 941px 324px" />

      <Pic src="/images/testimonials-1.jpg" d={[-148, 1934, 364, 400]} m={[35, 3708, 250, 275]} pos="0% 50%" />
      <Pic src="/images/testimonials-2.jpg" d={[215, 1935, 490, 399]} m={[20, 3993, 280, 228]} />
      <Pic src="/images/testimonials-3.jpeg" d={[694, 1935, 420, 400]} m={[20, 4231, 280, 267]} pos="46.7% 50%" />
    </Canvas>
  );
}
