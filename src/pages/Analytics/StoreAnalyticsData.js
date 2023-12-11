//storing mock data in Firebase

import { collection, setDoc, doc } from "firebase/firestore"; 
import { database } from "../../firebase";


export const StoreAnalyticsData = async (userEngagementData) => {
  const userEngagementCollection = collection(database, "userEngagementData");

  try {
    
    for (const entry of userEngagementData) {
      const entryId = entry.month;
      const entryDocRef = doc(userEngagementCollection, entryId);
      await setDoc(entryDocRef, entry);
      console.log(`Document ${entryId} written`);
    }
  } catch (e) {
    console.error("Error adding user engagement data: ", e);
  }
};

