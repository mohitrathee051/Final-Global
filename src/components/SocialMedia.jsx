import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  
  
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100065104174631&mibextid=ZbWKwL",
    icon: BsFacebook,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/msglobal-telecomservices-053248313/",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://x.com/Msglobal_T",
    icon: BsTwitter,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
