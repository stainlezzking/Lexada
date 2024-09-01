import image from "@/public/blogs/blog-technology.png";
import Image from "next/image";
import paragraph from "./data.json";
import BackToBlogs from "@/components/back-to-blogs";
import BlogIntro from "@/components/blogs.intro";

export const metadata = {
  title: "The Future of Real Estate in Lagos: How Technology is Changing the Industry",
};
export default function Page() {
  return (
    <main className="page-padding">
      <BackToBlogs />

      <div className="max-w-[1091px] mx-auto space-y-12">
        <BlogIntro title="The Future of Real Estate in Lagos: How Technology is Changing the Industry">
          The real estate industry in Lagos is undergoing a technological revolution. With the rapid adoption of digital tools like virtual tours, smart home
          technology, and real estate apps, the way properties are bought, sold, and managed is changing dramatically. In this post, we’ll explore how these
          advancements are transforming the Lagos real estate market and what it means for tech-savvy clients and investors looking to stay ahead of the curve.
        </BlogIntro>
        <Image src={image} placeholder="blur" className="w-full" width="1091" />
        <div className="space-y-4">
          {paragraph.map((block) => (
            <div key={block.id}>
              <h3 className="text-main font-medium text-lg">{block.id + ". " + block.header}</h3>
              <p>{block.body}</p>
              {block.details.map((detail, index) => (
                <div key={index}>
                  <h5 className="text-main font-medium "> {detail.subheader}</h5>
                  <p>{detail.body}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-main">Conclusion:</h2>
          <p>
            The integration of technology into the Lagos real estate market is not just a trend; it’s the future. From virtual tours and smart homes to
            blockchain transactions and PropTech startups, technology is reshaping the way properties are bought, sold, and managed. For tech-savvy clients and
            investors, staying informed about these advancements is crucial to making the most of the opportunities in this dynamic market. If you’re ready to
            explore how technology can enhance your real estate investments in Lagos, contact us today. We’re here to help you navigate the future of real
            estate with confidence.
          </p>
        </div>
      </div>
    </main>
  );
}
