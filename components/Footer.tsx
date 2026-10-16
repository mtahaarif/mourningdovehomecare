import Image from "next/image";
import { Box } from "./Box";
import { EMAIL, FACEBOOK, INSTAGRAM, PHONE, PHONE_HREF } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Box d={[19, 22, 35, 42]} m={[20, 20, 35, 42]} className="pic">
        <Image src="/images/icon-phone.png" alt="" width={35} height={42} />
      </Box>
      <Box d={[60, 44, 233, 19]} fs={[16]} className="f-avenir">
        <p>Call us today {PHONE}</p>
      </Box>
      <Box m={[64, 42, 236, 18]} mfs={[15]} className="f-avenir">
        <p>
          Call us today <a href={PHONE_HREF}>{PHONE}</a>
        </p>
      </Box>

      <Box d={[293, 31, 1, 37]} className="footer-divider" />

      <Box d={[328, 36, 41, 27]} m={[20, 72, 40, 26]} className="pic">
        <Image src="/images/icon-mail.png" alt="" width={41} height={27} style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box d={[382, 44, 285, 19]} m={[76, 79, 224, 36]} fs={[16]} mfs={[15]} className="f-avenir footer-email">
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Box>

      <Box d={[811, 31, 39, 39]} m={[116, 127, 39, 39]} as="a" href={INSTAGRAM} target="_blank" rel="noreferrer noopener" className="pic" aria-label="Instagram">
        <Image src="/images/icon-instagram.png" alt="Instagram" width={39} height={39} />
      </Box>
      <Box d={[860, 31, 39, 39]} m={[165, 127, 39, 39]} as="a" href={FACEBOOK} target="_blank" rel="noreferrer noopener" className="pic" aria-label="Facebook">
        <Image src="/images/icon-facebook.png" alt="Facebook" width={39} height={39} />
      </Box>

      <Box d={[0, 117, 0, 72]} m={[0, 176, 0, 85]} band className="bg-white" />
      <Box d={[253, 146, 531, 14]} m={[20, 196, 280, 45]} fs={[12]} mfs={[13]} className="f-avenir c-muted center">
        <p>
          © 2025 Mourning Dove Home Care LLC- All Rights Reserved, Powered and secured by{" "}
          <a href="https://wix.com/?utm_campaign=vir_created_with" target="_blank" rel="noreferrer noopener" className="underline">
            Wix
          </a>
        </p>
      </Box>
    </footer>
  );
}
