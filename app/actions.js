"use server";

import bcrypt from "bcryptjs";
import { db } from "./config/firebase";
import COLLECTION from "./api/variables";

export const loginUser = async function (data) {
  try {
    const adminRef = await db.collection(COLLECTION.admin).doc(data.email);
    const admin = await adminRef.get();
    if (!admin.exists || !bcrypt.compareSync(data.password, admin.data().password)) return { success: false, message: "invalid Credentials" };
    const { password, ...adminData } = admin.data();
    return { success: true, data: adminData };
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
