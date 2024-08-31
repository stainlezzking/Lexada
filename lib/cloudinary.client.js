export async function uploadImageCloudinary(img) {
  const formData = new FormData();
  formData.set("file", img);
  formData.set("upload_preset", "LexadUnsigned");
  return await fetch("https://api.cloudinary.com/v1_1/lexada/image/upload", {
    method: "POST",
    body: formData,
  });
}
