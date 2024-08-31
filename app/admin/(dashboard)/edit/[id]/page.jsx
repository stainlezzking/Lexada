import { getProperty } from "@/app/utils";
import EditProperty from "./client";

export const generateMetadata = async ({ params }) => {
  let property = await getProperty(params.id);
  return {
    title: `Edit ${property.data.title} Properties with Lexada Realestate`,
    description: property.data.description,
  };
};

const Page = async ({ params }) => {
  const property = await fetch(process.env.URL + "/api/listings/" + params.id, {
    next: {
      revalidate: 0,
    },
  }).then((d) => d.json());
  await new Promise((resolve) => setTimeout(resolve, 10000));
  // let property = await getProperty(params.id);
  if (!property.success) {
    throw new Error(property.message);
    // handle with errorboundary
  }
  return <EditProperty property={{ ...property.data, id: params.id }} />;
};

export default Page;
