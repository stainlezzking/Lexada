"use server";

import bcrypt from "bcryptjs";
import { db } from "./config/firebase";
import COLLECTION from "./api/variables";
import { signIn } from "./auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { sendEmail } from "./config/nodemailer";
import { contactUSEmailTemplate } from "@/components/emails/contact-us";
import { sendInspectionRequest } from "@/components/emails/inspection-request";
import { getAllPropertiesFunction } from "@/server/functions";

export const loginUser = async function (data) {
  try {
    const adminRef = await db.collection(COLLECTION.admin).doc(data.email);
    const admin = await adminRef.get();
    if (!admin.exists || !bcrypt.compareSync(data.password, admin.data().password)) return { success: false, message: "invalid Credentials" };
    const { password, ...adminData } = admin.data();
    await signIn("credentials", { ...adminData, redirect: false });
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false, message: e.message };
  }
};
// export const registerUser = async function (data) {
//   try {
//     data.password = await bcrypt.hash(data.password, 10);
//     const admin = await db.collection(COLLECTION.admin).doc(data.email).set(data);
//     console.log(admin);
//     return { success: true };
//   } catch (e) {
//     console.log(e);
//     return { success: false, message: e.message };
//   }
// };

export const revalidateAllRoute = async function () {
  // combined the listings because even when a listing is updated, you still have to
  // to update listings because of the preview information
  await revalidateTag("listings");
  return { success: true, message: "Revalidated all routes" };
};

// export const revalidatePathAction = async function (path) {
//   await revalidatePathAction(path);
//   return { success: true, message: "Revalidated " + path };
// };

export const getTitlesofListings = async function () {
  const properties = await getAllPropertiesFunction();
  if (!properties.success) return { success: false, message: "A problem occured! fetching properties" };
  return { success: true, data: properties.data.map((property) => property.title) };
};
export const contactUs = async function (data) {
  const response = await sendEmail(data.subject, contactUSEmailTemplate(data));
  return response;
};

export const scheduledListing = async function (data) {
  const response = await sendEmail("Scheduled Listing", sendInspectionRequest(data));
  return response;
};

export const registerMailList = async function (data) {
  try {
    await db.collection(COLLECTION.mailList).doc(data.email).set(data);
    return { success: true, message: "You have successfully Joined our mailing list" };
  } catch (e) {
    console.log(e);
    return { success: false, message: e.message };
  }
};
