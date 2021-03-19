import { useState , useEffect } from 'react';
import { p_storage , p_firestore, timeStamp } from '../firebase/config';

const UseStorage = (file) => {
    const [progress ,setProgress] = useState(0);
    const [error ,setError] = useState(null);
    const [url ,setUrl] = useState(null);

    useEffect(() => {
        //reference to where save file
        const storage_ref = p_storage.ref(file.name);
        const collection_ref = p_firestore.collection('images');

        storage_ref.put(file).on('state_changed' , (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        } , (err) => {
            setError(err)
        } , async() => {
            const url = await storage_ref.getDownloadURL();
            const createdAt = timeStamp();
            collection_ref.add({
                url: url,
                createdAt: createdAt
            })
            setUrl(url);
        })
    } , [file]);

    return { progress , url , error }
}

export default UseStorage;