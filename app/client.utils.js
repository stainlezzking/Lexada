import { uploadImageCloudinary } from "@/lib/cloudinary.client";
import { toast } from "sonner";

export async function UploadProperty(images, property) {
  try {
    const imagePromises = images.map((image) => uploadImageCloudinary(image.file).then((d) => d.json()));
    const imageResponse = await Promise.all(imagePromises);
    const newProperty = {
      ...property,
      images: imageResponse.map(({ secure_url: url, bytes, created_at, public_id }) => ({ url, bytes, created_at, public_id })),
    };
    const response = await fetch("/api/listings", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newProperty),
    }).then((d) => d.json());
    if (!response.success) return { message: response.message, success: false };
    return { success: true, ...response };
  } catch (e) {
    console.log(e);
    return { message: e.data?.message || e.message, success: false };
  }
}

export async function UploadEditedProperty(id, images, oldImages, deletedImages, property) {
  if (deletedImages.length) {
    // failed delete should not stop the process i dont mind having ectra un saved images on cloudinary
    try {
      fetch("/api/images", {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify({ publicIds: deletedImages }),
      })
        .then((res) => res.json())
        .then((response) => toast.warning(response.message, { position: "top-right" }));
    } catch (e) {
      toast.error(e.message);
    }
  }
  try {
    const imagePromises = images.map((image) => uploadImageCloudinary(image.file).then((d) => d.json()));
    const newImages = await Promise.all(imagePromises).then((response) => {
      console.log(response);
      return response.map(({ secure_url: url, bytes, created_at, public_id }) => ({ url, bytes, created_at, public_id }));
    });
    const newProperty = {
      ...property,
      images: [...oldImages, ...newImages],
    };
    const response = await fetch("/api/listings/" + id, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(newProperty),
    }).then((d) => d.json());
    if (!response.success) return { message: response.message, success: false };
    return { success: true, ...response };
  } catch (e) {
    console.log(e);
    return { message: e.data?.message || e.message, success: false };
  }
}
