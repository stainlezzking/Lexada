import { db } from "@/app/config/firebase";
import { NextResponse } from "next/server";
import COLLECTION from "@/app/api/variables";
import { revalidateTag } from "next/cache";

export async function GET(req, res) {
  try {
    console.log("this is the response, ", res.params);
    const data = await db.collection(COLLECTION.list).doc(res.params.id).get();
    if (!data.exists) return NextResponse.json({ success: false, message: "No property exists with this ID please go to the home page" });
    return NextResponse.json({ success: true, data: data.data() });
  } catch (e) {
    return NextResponse.json({ success: false, message: "An error occured " + e.message });
  }
}

// update property
export async function PUT(req, res) {
  const newUpdate = await req.json();
  try {
    const data = await db.collection(COLLECTION.list).doc(res.params.id).update(newUpdate);
    revalidateTag("listings");
    return NextResponse.json({ success: true, id: res.params.id });
  } catch (e) {
    return NextResponse.json({ success: false, message: "An error occured " + e.message });
  }
}

export async function DELETE(req, res) {
  try {
    await db.collection(COLLECTION.list).doc(res.params.id).delete();
    revalidateTag("listings");
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, message: "An error occured " + e.message });
  }
}
