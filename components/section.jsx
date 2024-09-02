import { twMerge } from "tw-merge";
const Section = ({ children, className }) => {
  // 112px, 64px, 112px, 64p
  return <section className={twMerge("py-16 md:py-28 page-padding " + className)}>{children}</section>;
};

export default Section;
