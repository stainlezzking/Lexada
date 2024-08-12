import { db } from "@/app/config/firebase";
import { NextResponse } from "next/server";
import COLLECTION from "../../variables";

export async function GET(req, res) {
  try {
    const data = await db.collection(COLLECTION.list).doc(res.params.id).get();
    if (!data.exists) return NextResponse.json({ success: false, message: "No property exists with this ID please go to the home page" });
    return NextResponse.json({ success: true, data: data.data() });
  } catch (e) {
    return NextResponse.json({ success: false, message: "An error occured " + e.message });
  }
}
