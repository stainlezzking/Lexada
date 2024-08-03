import { twMerge } from "tw-merge";
const Section = ({ children, className }) => {
  // 112px, 64px, 112px, 64p
  return <section className={twMerge("pt-16 md:pt-28 pb-10 page-padding " + className)}>{children}</section>;
};

export default Section;
