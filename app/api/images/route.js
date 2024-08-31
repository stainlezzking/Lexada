import { destroyImageCloudinary } from "@/lib/cloudinary.server";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    const { publicIds } = await req.json();
    const res = await Promise.all(publicIds.map((publicId) => destroyImageCloudinary(publicId)));
    console.log(res);
    return NextResponse.json({ message: "Updated Delete request received", success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Images could not be deleted from database", success: false });
  }
}
