import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = JSON.parse(Buffer.from(process.env.SERVICEACC_BUFFER, "base64").toString("utf-8"));

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: `https://${process.env.project_id}.firebaseio.com`,
  });
}

export const db = getFirestore();
