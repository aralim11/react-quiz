import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";


function useVideoList(){
    const [error, setError] = useState();
    const [videos, setVideos] = useState();

    useEffect(() => {
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
            );

            try {
                setError("");
                const snapShot = await get(videoQuery);
                console.log(snapShot.val());
                if (snapShot.exists()) {
                    setVideos(snapShot); 
                }
            } catch (error) {
                console.log(error);
                setError("Data Fetch Failed");
            }
        }

        fetchVideos();
    }, []);

    return {
        error,
        videos,
    };
}

export default useVideoList;