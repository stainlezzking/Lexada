import cloudinary from "@/app/config/cloudinary";

// do not import this function in the frontend
export async function destroyImageCloudinary(public_id) {
  await cloudinary.uploader.destroy(public_id);
  return null;
}
