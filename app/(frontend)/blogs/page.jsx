import Blogspreview from "@/components/blogs.preview";
import Footer from "@/components/footer";
import Section from "@/components/section";
import image1 from "@/public/firstimage.png";

const Blogs = () => {
  return (
    <div className="space-y-28">
      <Section className="space-y-16">
        <div className="text-start">
          <h1 className="title">
            OUR <span className="text-primary">Blogs</span>
          </h1>
          <span>Stay Informed with the Latest Real Estate Insights and Trends</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px]">
          <div className="col-span-1 max-w-[450px] w-full mx-auto">
            <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
          </div>
          <div className="col-span-1 max-w-[450px] w-full mx-auto">
            <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
          </div>
          <div className="col-span-1 max-w-[450px] w-full mx-auto">
            <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
          </div>
          <div className="col-span-1 max-w-[450px] w-full mx-auto">
            <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
          </div>
          <div className="col-span-1 max-w-[450px] w-full mx-auto">
            <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
          </div>
          <div className="col-span-1 max-w-[450px] w-full mx-auto">
            <Blogspreview url={image1} id={1} title="The Nigerian Real Estate Market: Trends and Predictions for 2024" />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Blogs;
