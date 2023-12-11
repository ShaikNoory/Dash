import { collection, setDoc, doc } from "firebase/firestore"; 
import { database } from "../../firebase";


export const StoreFinancialData = async (financialData) => {
  const userEngagementCollection = collection(database, "financialData");

  try {
    
    for (const entry of financialData) {
      const entryId = entry.symbol;
      const entryDocRef = doc(userEngagementCollection, entryId);
      await setDoc(entryDocRef, entry);
      console.log(`Document ${entryId} written`);
    }
  } catch (e) {
    console.error("Error adding user engagement data: ", e);
  }
};

