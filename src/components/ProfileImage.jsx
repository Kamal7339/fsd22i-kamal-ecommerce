
import React, { useState } from 'react';
import { storage } from '../firebase'; 
import { getStorage,ref, uploadBytes ,getDownloadURL} from 'firebase/storage';


const ProfileImage = ({ userId, onImageUpload }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleImageUpload = async () => {
        if (image) {
            const storageRef = ref(storage, `profile_images/${userId}`);
            await uploadBytes(storageRef, image);
            const downloadURL = await getDownloadURL(storageRef);
            onImageUpload(downloadURL);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Profile Image</button>
        </div>
    );
};

export default ProfileImage;
