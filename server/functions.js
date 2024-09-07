import COLLECTION from "@/app/api/variables";
import { db } from "@/app/config/firebase";
import { unstable_cache } from "next/cache";

export const getPropertyFunction = (id) => {
  return unstable_cache(
    async function () {
      try {
        const data = await db.collection(COLLECTION.list).doc(id).get();
        if (!data.exists) return { success: false, message: "No property exists with this ID please go to the home page" };
        return { success: true, data: data.data() };
      } catch (e) {
        return { success: false, message: "An error occured " + e.message };
      }
    },
    [id],
    { tags: ["listings"] }
  );
  // adding the unstable cache in the page.jsx so i can add the id to the cache key
};

export const deletePropertyFunction = async (id) => {
  try {
    await db.collection(COLLECTION.list).doc(id).delete();
    return { success: true };
  } catch (e) {
    return { success: false, message: "An error occured " + e.message };
  }
};

export const getAllPropertiesFunction = unstable_cache(
  async () => {
    try {
      console.log("fetching properties");
      const arr = [];
      const snapshot = await db.collection(COLLECTION.list).get();
      snapshot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: arr };
    } catch (e) {
      return { success: false, message: "An error occured " + e.message };
    }
  },
  ["listings"],
  { tags: ["listings"] }
);

// export const createPropertyFunction = async () => {
//   try {
//     const data = await req.json();
//     const docRef = await db.collection(COLLECTION.list).add({ createdAt: format(new Date(), "MMMM d, yyyy"), ...data });
//     return { success: true, id: docRef.id };
//   } catch (e) {
//     return { success: false, message: "An error occured " + e.message };
//   }
// };
