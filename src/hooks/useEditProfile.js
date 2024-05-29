import { useState } from "react"
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";


const useEditProfile = () => {
  
    const [isLoading, setIsLoading] = useState(false);
    const authUser = useAuthStore(state=>state.user);
    const setAuthUser=useAuthStore(state=>state.setUser);
    const showToast = useShowToast();
    const setUserProfile = useUserProfileStore(state=>state.setUserProfile)
    
    const editProfile = async (inputs, selectedFile)=>{
       
        if(isLoading || !authUser) return ;
        setIsLoading(true);
        const storageRef = ref(storage,`profilePics/${authUser.uid}`)
        const userDocRef = doc(firestore, 'users',authUser.uid);
        let URL = '';
        try {
            if(selectedFile){
                await uploadString(storageRef, selectedFile, 'data_url');
                URL = await getDownloadURL(ref(storage,`profilePics/${authUser.uid}`))
            }
            const updatedUser= {
                ...authUser,
                fullname:inputs.fullname||authUser.fullname,
                username:inputs.username||authUser.username,
                bio:inputs.bio||authUser.bio,
                profilePicUrl:URL||authUser.profilePicUrl

            }
            await updateDoc(userDocRef, updatedUser);;
            localStorage.setItem("user-info",JSON.stringify(updatedUser));
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
            showToast("Success","Profile updated successfully","success");
        } catch (error) {
            showToast("Error",error.message,"error")
        }

    }

    return {editProfile,isLoading};

}

export default useEditProfile