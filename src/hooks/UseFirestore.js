import { useState , useEffect } from 'react';
import { p_firestore } from '../firebase/config';

const UseFirestore = (collection) => {
    const [docs , settDocs] = useState([]);

    useEffect(() => {
        const unsub = p_firestore.collection(collection)
        .orderBy('createdAt' , 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data() , id: doc.id })
                });
                settDocs(documents);
            });

            return () => unsub();

    } , [collection])

    return { docs };
}

export default UseFirestore;