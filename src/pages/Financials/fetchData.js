//fetch data from Firebase
import { onSnapshot, collection } from 'firebase/firestore';
import { database } from '../../firebase';

export const fetchData = async (setFinancialData) => {
    
    try {
      const response = collection(database, 'financialData');
      const getData = onSnapshot(response, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setFinancialData(data);
      });

      return () => {
        getData();
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
