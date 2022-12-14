import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";

function useVideoList(page){
    const [error, setError] = useState(false);
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
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery); // request to database
                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())];
                    });
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }

        fetchVideos();
    }, [page]);

    return {
        error,
        videos,
        loading,
        hasMore,
    };
}

export default useVideoList;