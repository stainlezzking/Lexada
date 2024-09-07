import { getPropertyFunction } from "@/server/functions";
import EditProperty from "./client";

export const generateMetadata = async ({ params }) => {
  let property = await getPropertyFunction(params.id)();
  return {
    title: `Edit ${property.data.title} Properties with Lexada Realestate`,
    description: property.data.description,
  };
};

const Page = async ({ params }) => {
  const property = await getPropertyFunction(params.id)();
  if (!property.success) {
    throw new Error(property.message);
    // handle with errorboundary
  }
  return <EditProperty property={{ ...property.data, id: params.id }} />;
};

export default Page;
