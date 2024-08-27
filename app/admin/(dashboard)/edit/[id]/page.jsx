import EditProperty from "./client";

export const generateMetadata = async ({ params }) => {
  let property = await getProperty(params.id);
  return {
    title: `Edit ${property.data.title} Properties with Lexada Realestate`,
    description: property.data.description,
  };
};

const getProperty = async function (id) {
  const response = await fetch(`${process.env.URL}/api/listings/${id}`).then((data) => data.json());
  return response;
};

const Page = async ({ params }) => {
  let property = await getProperty(params.id);
  console.log(property);
  if (!property.success) {
    throw new Error(property.message);
    // handle with errorboundary
  }
  return <EditProperty property={property.data} />;
};

export default Page;
