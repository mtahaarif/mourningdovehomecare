import type { StaticImageData } from "next/image";
import { img } from "./images";
import type { Faq } from "./seo";
import { FULL_ADDRESS, PHONE } from "./site";

/*
 * All copy below comes from the original site, except the one-line
 * `blurb` on each NON_SKILLED service, which was added for the redesign's
 * service cards and should be reviewed by the business owner.
 *
 * Only Server Components import this module. Copy that a client component
 * renders lives in its own small module (lib/testimonials.ts, lib/odp.ts), since
 * everything a client component imports ships in its JavaScript.
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
