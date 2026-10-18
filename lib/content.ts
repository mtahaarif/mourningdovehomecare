import type { StaticImageData } from "next/image";
import { img } from "./images";
import type { Faq } from "./seo";
import { FULL_ADDRESS, PHONE } from "./site";

/*
 * All copy below comes from the original site, except the one-line
 * `blurb` on each NON_SKILLED service, which was added for the redesign's
 * service cards and should be reviewed by the business owner.
 */

export const MISSION =
  "Mourning Dove Home Care's mission is to deliver compassionate, high-quality, and personalized care to individuals in their homes, enabling them to maintain independence and dignity.";

export const NON_SKILLED = [
  { title: "Companionship", icon: "HeartHandshake", blurb: "Warm, attentive company that keeps your loved one engaged and connected at home." },
  { title: "Meal Planning", icon: "Soup", blurb: "Planning nourishing meals around individual needs and preferences." },
  { title: "Personal Care/Hygiene", icon: "ShowerHead", blurb: "Respectful, dignified help with bathing, grooming and daily hygiene." },
  { title: "Light Housekeeping", icon: "Sparkles", blurb: "Keeping the home tidy, safe and comfortable to live in." },
  { title: "Support for ADL's and IADL's", icon: "Footprints", blurb: "Help with Activities of Daily Living and Instrumental Activities of Daily Living." },
  { title: "Medication Reminders", icon: "AlarmClock", blurb: "Timely reminders that help keep medications on schedule." },
  { title: "Respite Care", icon: "Coffee", blurb: "Time for family caregivers to rest and recharge, knowing their loved one is cared for." },
] as const;

export const SPECIALIZED = ["Alzheimer's or dementia", "Physical disabilities", "Post-operative care"] as const;

export const SPECIALIZED_TEXT =
  "We also provide specialized care for individuals with specific needs, such as Alzheimer's or dementia, physical disabilities, and post-operative care.";

export const SERVICE_NOTE =
  "The following services are specifically designed to address the needs of the client only. Please note that seasonal chores, maintenance tasks, heavy duty cleaning, lawn care, pet care, and assistance for family members or guests residing in the same household are not included unless explicitly arranged through our office.";

export const SUPPORTED_EMPLOYMENT =
  "Partnered with UPMC Health Plan, Mourning Dove Home Care’s Supported Employment Services help adults with intellectual and developmental disabilities find meaningful jobs within their communities.";

export const ODP_INTRO =
  "We offer services, support, and resources to individuals with intellectual and developmental disabilities, including autism, in Montgomery County, PA, and the surrounding counties.";

export const ODP_CARDS: { title: string; image: StaticImageData; alt: string; body: string }[] = [
  {
    title: "Specialized Companionship",
    image: img.popsicles,
    alt: "Friends With Popsicles",
    body: "Mourning Dove Home Care provides specialized companionship services for individuals with intellectual disabilities, thoughtfully designed to support their health, safety, and overall well-being. Our companions go beyond simply offering company—they deliver essential supervision and attentive care, helping create a safe, nurturing environment for your loved one.",
  },
  {
    title: "At Home & In the Community",
    image: img.dance,
    alt: "Group Dance Class",
    body: "Our ODP Services include Community Participation Support, Homemaker and Chore Services and Companionship. These services are offered both at home and throughout the community, helping your loved one live a meaningful and independent life wherever they may be.",
  },
  {
    title: "Eligibility",
    image: img.learning,
    alt: "Learning Together",
    body: "Eligibility for services through the Office of Developmental Programs (ODP) depends on having a diagnosed intellectual or developmental disability. If you or a loved one has a lifelong condition that impacts learning and daily living—including autism—we’re here to help. Our team will support you through the enrollment process with compassion and clarity.",
  },
];

export const CONDITIONS = [
  "Intellectual Disability (ID)",
  "Autism Spectrum Disorder (ASD)",
  "Cerebral Palsy",
  "Down Syndrome",
  "Fetal Alcohol Spectrum Disorders (FASD)",
  "Fragile X Syndrome",
  "Prader-Willi Syndrome",
  "Spina Bifida",
  "Other Neurological Conditions",
] as const;

/** Home-page service overview cards (copy drawn from the Services page). */
export const SERVICE_TRACK: { n: string; title: string; text: string; image: StaticImageData; href: string }[] = [
  {
    n: "01",
    title: "Non-Skilled Home Care",
    text: "Companionship, meal planning, personal care, light housekeeping, medication reminders and respite care.",
    image: img.services1,
    href: "/services#home-care",
  },
  {
    n: "02",
    title: "Specialized Care",
    text: "Care for individuals with specific needs, such as Alzheimer's or dementia, physical disabilities, and post-operative care.",
    image: img.services2,
    href: "/services#specialized",
  },
  {
    n: "03",
    title: "Supported Employment",
    text: "Helping adults with intellectual and developmental disabilities find meaningful jobs within their communities.",
    image: img.gardening,
    href: "/services#supported-employment",
  },
  {
    n: "04",
    title: "ODP Services",
    text: "Community Participation Support, Homemaker and Chore Services and Companionship — at home and in the community.",
    image: img.popsicles,
    href: "/services#odp",
  },
  {
    n: "05",
    title: "Respite Care",
    text: "Support for ADL's and IADL's and respite care, so families can rest knowing their loved one is cared for.",
    image: img.services3,
    href: "/services#home-care",
  },
];

export type Testimonial = { name: string; excerpt: string; paragraphs: string[] };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Richard Duvall, PA",
    excerpt: "I really appreciated the care and attention to detail and the compassion and a concern for my family.",
    paragraphs: [
      "\"This the Daughter of Richard Duvall commenting about the care and attention given to me and my family during what turned out to be Dad’s final 2 weeks. We were preparing to sign up with Mourning Dove. But unfortunately, Daddy’s health took a turn for the worse. He had to be admitted to the hospital and subsequently passed away there. While we didn’t get a chance to use any of the CNA Service’s provided by Mourning Dove, I can say that I really appreciated the care and attention to detail and the compassion and a concern for my family. I could only imagine what that would have looked like had they been able to provide Dad with actual CNA. They were very patient and understanding with our family and I would highly recommend them. I encourage Mourning Dove to keep up the good work.\"",
    ],
  },
  {
    name: "Joshua Amoro, PA",
    excerpt: "They were patient, supportive, and always took the time to answer all of my questions.",
    paragraphs: [
      "\"Mourning Dove Home Care LLC made the whole process of getting my home care license so much easier. They were patient, supportive, and always took the time to answer all of my questions. I’m so thankful for their help and guidance every step of the way!”",
    ],
  },
  {
    name: "Evan Vargas, PA",
    excerpt: "Mourning Dove Home Care LLC truly goes above and beyond.",
    paragraphs: [
      "\"Mourning Dove Home Care LLC truly goes above and beyond.",
      "Their team is compassionate, reliable, and genuinely cares about the well-being of their clients. From day one, communication was clear, professional, and supportive. They treat families with respect and provide a level of comfort and peace of mind that is hard to find.",
      "I highly recommend Mourning Dove Home Care LLC to anyone looking for trustworthy, high-quality home care services. They really make a difference\"",
    ],
  },
  {
    name: "Ali Schubert, PA",
    excerpt: "Mel is very professional and kind. Always willing to answer any questions that I may have and always willing to help.",
    paragraphs: [
      "\"Mel is very professional and kind. Always willing to answer any questions that I may have and always willing to help. Thank you\"",
    ],
  },
  {
    name: "Elijah Smith, PA",
    excerpt: "My uncle wasn’t just another client to them. They treated him like family.",
    paragraphs: [
      "\"I want to express my deepest gratitude to Mourning Dove Home Care for the incredible care they provided to my uncle. From the very first day, their team showed genuine kindness, patience, and respect—not just toward him, but toward our entire family.",
      "My uncle wasn’t just another client to them. They treated him like family. The caregivers took the time to listen to his stories, learn his routines, and make sure he felt valued and comfortable every day. Their warmth and professionalism gave us peace of mind, knowing he was in loving and capable hands.",
      "Even during difficult moments, the caregivers showed unwavering compassion and understanding. Their presence brought light and comfort to our home when we needed it most.",
      "Thank you, Mourning Dove Home Care for going above and beyond. Your dedication and heart made all the difference in my uncle’s life—and in ours. We’ll forever be grateful for the love and dignity you gave him.\"",
    ],
  },
  {
    name: "Aaron Spence, PA",
    excerpt: "Mel and Jasmine are very caring people.",
    paragraphs: [
      "\"I’ve known Mel for twenty years. Mel and Jasmine are very caring people. He is experienced they will care for your loved ones.\"",
    ],
  },
];

export const CAREER_BENEFITS = [
  { title: "Competitive Pay", icon: "Wallet" },
  { title: "Ability to choose jobs", icon: "CalendarCheck" },
  { title: "Professional Growth and Training", icon: "GraduationCap" },
  { title: "401k Plans Available", icon: "PiggyBank" },
] as const;

export const POSITIONS = ["Home Care Aide", "Registered Nurse", "Care Coordinator", "Scheduler", "Office Assistant"] as const;

export const COMMITMENT = [
  {
    title: "Quality of life in the golden years",
    text: "We are committed to enhancing the quality of life for our clients during their golden years.",
  },
  {
    title: "Care tailored to the individual",
    text: "We tailor care that maximizes independence and meets individual needs.",
  },
  {
    title: "Empowering independence",
    text: "Our goal is to empower patients to live more independently.",
  },
  {
    title: "Your physician’s eyes and ears",
    text: "We collaborate closely with the patient's physician to implement their directives, acting as their eyes and ears in the process.",
  },
  {
    title: "Compassion, above all",
    text: "Above all, we are committed to providing compassionate care within the comfort of the client's home.",
  },
] as const;

/*
 * FAQs. Every answer restates facts already published on the site
 * (services, hours, address, service area, positions and benefits).
 */
const HOURS_TEXT = "Monday–Thursday 9:00am–5:00pm and Friday 9:00am–12:30pm (Eastern Time)";

export const ABOUT_FAQ: Faq[] = [
  {
    q: "Who is Mourning Dove Home Care?",
    a: "Mourning Dove Home Care LLC is a home care service provider based out of Montgomery County, Pa., servicing Montgomery County and the surrounding areas.",
    link: { href: "/services", label: "Explore our home care services" },
  },
  {
    q: "What kind of care do you provide?",
    a: "We provide non-skilled home care — companionship, meal planning, personal care/hygiene, light housekeeping, support for ADL's and IADL's, medication reminders and respite care — as well as specialized care for individuals with specific needs, such as Alzheimer's or dementia, physical disabilities, and post-operative care.",
    link: { href: "/services#home-care", label: "See every non-skilled home care service" },
  },
  {
    q: "Do you work with my loved one's doctor?",
    a: "Yes. We collaborate closely with the patient's physician to implement their directives, acting as their eyes and ears in the process.",
  },
  {
    q: "Do you support people with intellectual and developmental disabilities?",
    a: "Yes. Our ODP services and Supported Employment Services support individuals with intellectual and developmental disabilities, including autism, in Montgomery County, PA, and the surrounding counties.",
    link: { href: "/services#odp", label: "Learn about ODP services and eligibility" },
  },
];

export const EMPLOYMENT_FAQ: Faq[] = [
  {
    q: "What positions are you hiring for?",
    a: "We are hiring for Home Care Aide, Registered Nurse, Care Coordinator, Scheduler and Office Assistant positions.",
  },
  {
    q: "What benefits do you offer?",
    a: "Competitive pay, the ability to choose jobs, professional growth and training, and 401k plans — with more benefits soon to come.",
  },
  {
    q: "How do I apply?",
    a: `Complete the application on this page, or call our office at ${PHONE} during office hours: ${HOURS_TEXT}.`,
  },
  {
    q: "Where would I be working?",
    a: `Our team provides care in clients' homes across Montgomery County, PA, and the surrounding areas. Our office is at ${FULL_ADDRESS}.`,
    link: { href: "/about", label: "Learn more about Mourning Dove Home Care" },
  },
];

export const CONTACT_FAQ: Faq[] = [
  {
    q: "How do I get started with home care?",
    a: `Call us at ${PHONE} or send your details through the contact form. Our advisors are available to assist you with any questions you may have.`,
    link: { href: "/services", label: "Browse our home care services" },
  },
  { q: "What are your office hours?", a: `${HOURS_TEXT}.` },
  { q: "Where is your office?", a: `Our office is at ${FULL_ADDRESS}.` },
  { q: "Which areas do you serve?", a: "Montgomery County, PA, and the surrounding areas." },
  {
    q: "Are you hiring?",
    a: "Yes. We are constantly seeking compassionate individuals to join our dedicated team of home care professionals.",
    link: { href: "/employment", label: "See open positions and apply" },
  },
];
