// subscribeService.js
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/shared/services/firebase';

export const addSubscriberEmail = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, 'subscribers'), { email });
    return docRef.id;
  } catch (error) {
    return null;
  }
};
