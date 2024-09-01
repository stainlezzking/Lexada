import image from "@/public/blogs/blog-emerging.png";
import Image from "next/image";
import paragraph from "./data.json";
import BackToBlogs from "@/components/back-to-blogs";
import BlogIntro from "@/components/blogs.intro";

export const metadata = {
  title: "Top 10 Emerging Neighborhoods to Invest in Lagos Real Estate",
};
export default function Page() {
  return (
    <main className="page-padding">
      <BackToBlogs />

      <div className="max-w-[1091px] mx-auto space-y-12">
        <BlogIntro title="Top 10 Emerging Neighborhoods to Invest in Lagos Real Estate">
          Lagos, Nigeria's commercial hub, is known for its dynamic and rapidly evolving real estate market. For investors, especially those new to real estate,
          identifying the next hot spots can be the key to securing high returns. In this post, we’ll explore the top 10 emerging neighborhoods in Lagos where
          property values are expected to rise, offering exciting opportunities for both seasoned investors and real estate beginners.
        </BlogIntro>
        <Image src={image} placeholder="blur" className="w-full" width="1091" />
        <div className="space-y-4">
          {paragraph.map((block) => (
            <div key={block.id}>
              <h3 className="text-main font-medium text-lg">{block.id + ". " + block.header}</h3>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-main">Conclusion:</h2>
          <p>
            Investing in Lagos real estate, particularly in these emerging neighborhoods, offers great potential for growth. For beginners, the key is to start
            small, do thorough research, and focus on areas with strong future prospects. By targeting these up-and-coming locations, you can secure a solid
            investment that will appreciate over time. If you’re ready to explore these opportunities, reach out to us for expert advice and guidance tailored
            to your investment goals.
          </p>
        </div>
      </div>
    </main>
  );
}
