import Blogspreview from "@/components/blogs.preview";
import Section from "@/components/section";
import { allBlogs } from "./blogs.preview.constant";

const Blogs = () => {
  return (
    <div className="space-y-28">
      <Section className="space-y-16">
        <div className="text-start">
          <h1 className="title">
            Our <span className="text-primary">Blog</span>
          </h1>
          <span>Stay Informed with the Latest Real Estate Insights and Trends</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px]">
          {allBlogs.map((blog) => (
            <div className="col-span-1 max-w-[450px] w-full mx-auto" key={blog.id}>
              <Blogspreview url={blog.image} id={blog.id} title={blog.title} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blogs;
