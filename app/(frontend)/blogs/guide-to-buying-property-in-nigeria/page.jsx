import image from "@/public/blogs/blog-guide.png";
import Image from "next/image";
import paragraph from "./data.json";
import BackToBlogs from "@/components/back-to-blogs";
import BlogIntro from "@/components/blogs.intro";

export const metadata = {
  title: "A Complete Guide to Buying Property in Nigeria: Legal and Financial Considerations",
};
export default function Page() {
  return (
    <main className="page-padding">
      <BackToBlogs />

      <div className="max-w-[1091px] mx-auto space-y-12">
        <BlogIntro title="A Complete Guide to Buying Property in Nigeria: Legal and Financial Considerations">
          Buying property in Nigeria, particularly in the bustling city of Lagos, is an exciting yet challenging endeavor. Whether you're a first-time
          buyer or an experienced investor, understanding the legal and financial aspects is crucial to making a successful purchase. In this
          comprehensive guide, we’ll walk you through the essential steps to buying property in Lagos, covering everything from initial research to
          finalizing your purchase.
        </BlogIntro>
        <Image
          src={image}
          placeholder="blur"
          alt="A Complete Guide to Buying Property in Nigeria: Legal and Financial Considerations"
          className="w-full"
          width="1091"
        />
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
            Buying property in Lagos is a major investment, but with the right knowledge and preparation, it can be a rewarding experience. By
            following these steps and paying close attention to the legal and financial details, you’ll be well on your way to securing a valuable
            asset that can appreciate over time. If you’re ready to take the next step in your property journey, don’t hesitate to reach out to us for
            expert advice and support.
          </p>
        </div>
      </div>
    </main>
  );
}
