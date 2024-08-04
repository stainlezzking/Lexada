import { NextResponse } from "next/server";
import { db } from "@/app/config/firebase";
import { upload } from "@/app/config/multer";

const COLLECTION = {
  list: "listings",
};
export async function GET(req, res) {
  try {
    const arr = [];
    const snapshot = await db.collection(COLLECTION.list).get();
    snapshot.forEach((doc) => {
      arr.push({ id: doc.id, ...doc.data() });
    });
    // perform this snapshot loop on the client
    return NextResponse.json({ success: true, arr });
  } catch (e) {
    return NextResponse.json({ message: e.message, success: false });
  }
}
export async function POST(req, res) {
  try {
    const data = await req.json();
    // first upload the properties using cloudinary and then add the data here
    const docRef = db.collection(COLLECTION.list).add(data);
    return NextResponse.json({ success: true, id: docRef.id });
  } catch (e) {
    return NextResponse.json({ message: e, success: false });
  }
}
