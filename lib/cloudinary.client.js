export async function uploadImageCloudinary(img) {
  const formData = new FormData();
  formData.set("file", img);
  formData.set("upload_preset", "LexadUnsigned");
  return await fetch("https://api.cloudinary.com/v1_1/lexada/image/upload", {
    method: "POST",
    body: formData,
  });
}

// export async function destroyImageCloudinary(){
//   // https://api.cloudinary.com/v1_1/{{cloud_name}}/:resource_type/destroy
// }

// {
//     "asset_id": "f10ef77cb7bfde305241e455905c7a4e",
//     "public_id": "lexada-real-estate-lagos/lexada",
//     "version": 1723349629,
//     "version_id": "e66d7d8f7a3d3ef04c9f4262b0cfe504",
//     "signature": "56511078e1d81768ca87e112c9b7ce0a332bb831",
//     "width": 1280,
//     "height": 720,
//     "format": "png",
//     "resource_type": "image",
//     "created_at": "2024-08-11T04:13:49Z",
//     "tags": [],
//     "bytes": 376189,
//     "type": "upload",
//     "etag": "68c0ae11dcf8d34d00b9bcae58c7292e",
//     "placeholder": false,
//     "url": "http://res.cloudinary.com/lexada/image/upload/v1723349629/lexada-real-estate-lagos/lexada.png",
//     "secure_url": "https://res.cloudinary.com/lexada/image/upload/v1723349629/lexada-real-estate-lagos/lexada.png",
//     "folder": "lexada-real-estate-lagos",
//     "access_mode": "public",
//     "existing": false,
//     "original_filename": "carousel-5"
// }
