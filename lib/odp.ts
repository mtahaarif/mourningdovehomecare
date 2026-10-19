import type { StaticImageData } from "next/image";
// Imported one by one rather than through lib/images: a client component
// (OdpCards) renders these, and the whole image map would ship in its bundle.
import popsicles from "@/public/images/odp-friends-popsicles.jpg";
import dance from "@/public/images/odp-group-dance.jpg";
import learning from "@/public/images/odp-learning-together.jpeg";

/* ODP service cards on the Services page; copy from the original site. */
export const ODP_CARDS: { title: string; image: StaticImageData; alt: string; body: string }[] = [
  {
    title: "Specialized Companionship",
    image: popsicles,
    alt: "Friends With Popsicles",
    body: "Mourning Dove Home Care provides specialized companionship services for individuals with intellectual disabilities, thoughtfully designed to support their health, safety, and overall well-being. Our companions go beyond simply offering company—they deliver essential supervision and attentive care, helping create a safe, nurturing environment for your loved one.",
  },
  {
    title: "At Home & In the Community",
    image: dance,
    alt: "Group Dance Class",
    body: "Our ODP Services include Community Participation Support, Homemaker and Chore Services and Companionship. These services are offered both at home and throughout the community, helping your loved one live a meaningful and independent life wherever they may be.",
  },
  {
    title: "Eligibility",
    image: learning,
    alt: "Learning Together",
    body: "Eligibility for services through the Office of Developmental Programs (ODP) depends on having a diagnosed intellectual or developmental disability. If you or a loved one has a lifelong condition that impacts learning and daily living—including autism—we’re here to help. Our team will support you through the enrollment process with compassion and clarity.",
  },
];
