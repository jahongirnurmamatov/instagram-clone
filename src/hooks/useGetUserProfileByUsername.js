// hooks/useGetUserProfileByUsername.js
import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
    const userProfile = useUserProfileStore((state) => state.userProfile);

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);
            try {
                const q = query(collection(firestore, "users"), where("username", "==", username));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.empty) {
                    setUserProfile(null);
                } else {
                    const userDoc = querySnapshot.docs[0].data();
                    setUserProfile(userDoc);
                }
            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };

        if (username) {
            getUserProfile();
        }
    }, [username, setUserProfile, showToast]);

    return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
