import { NextResponse } from "next/server";
import { db } from "@/app/config/firebase";
import COLLECTION from "../variables";
import { format } from "date-fns";
export async function GET(req, res) {
  try {
    const arr = [];
    const snapshot = await db.collection(COLLECTION.list).get();
    snapshot.forEach((doc) => {
      arr.push({ id: doc.id, ...doc.data() });
    });
    // perform this snapshot loop on the client
    return NextResponse.json({ success: true, data: arr });
  } catch (e) {
    return NextResponse.json({ message: e.message, success: false });
  }
}
export async function POST(req, res) {
  try {
    const data = await req.json();
    const docRef = await db.collection(COLLECTION.list).add({ createdAt: format(new Date(), "MMMM d, yyyy"), ...data });
    return NextResponse.json({ success: true, id: docRef.id });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: e, success: false });
  }
}
