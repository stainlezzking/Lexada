import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./firebase-admin.json";

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: `https://${process.env.project_id}.firebaseio.com`,
});

export const db = getFirestore();

// const schema = {
//   title: String,
//   location: String,
//   price:Number,
//   description:String,
//   images: [String],
//   features: [String],
//   youtube: String,
//   location: String,
// };
