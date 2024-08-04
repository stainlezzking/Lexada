import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "unizik-housing",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
