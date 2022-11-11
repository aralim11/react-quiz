import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";


function useVideoList(page){
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            );

            try {
                setError("");
                setLoading(true);
                const snapShot = await get(videoQuery);
                setLoading(false);
                if (snapShot.exists()) {
                    console.log(snapShot);
                    setVideos((prevVideos) => {
                        return [...prevVideos, Object.values(snapShot.val())]
                    }); 
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                setError("Data Fetch Failed");
                setLoading(false);
            }
        }

        fetchVideos();
    }, [page]);

    return {
        error,
        videos,
        hasMore,
        loading,
    };
}

export default useVideoList;