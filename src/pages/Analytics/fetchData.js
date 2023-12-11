//fetch data from firebase db

import { onSnapshot, collection } from 'firebase/firestore';
import { database } from '../../firebase';

export const fetchData = async (setUserEngagementData) => {
    try {
      const response = collection(database, 'userEngagementData');
      const getData = onSnapshot(response, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setUserEngagementData(data);
      });

      return () => {
        getData();
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
