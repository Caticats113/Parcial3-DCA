import { Recipie } from "../types/store";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addRecipiesToDB = async (recipie:Recipie) => {
    try {
        const docRef = await addDoc(collection(db, "recipies"), {
            photo: recipie.photo,
            name: recipie.name,
            ingredients: recipie.ingredients,
            steps: recipie.steps
        });
        console.log(docRef);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getRecipiesFromDB = async (recipie:Recipie) => {
    const querySnapshot = await getDocs(collection(db, "recipies"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}

